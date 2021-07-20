import { Workout } from "../entites/WorkOut";
import {
  Arg,
  Ctx,
  FieldResolver,
  Int,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { WorkoutInput } from "./inputType/WorkoutInput";
import { getConnection } from "typeorm";
import { WorkOutRespone } from "./ResponseType/WorkoutResponse";
import { MyContext } from "src/types";
import { User } from "../entites/User";

@Resolver(Workout)
export class WorkoutResolver {
  @FieldResolver(() => User)
  workoutUser(
    @Root() workout: Workout,

    @Ctx() { userLoader }: MyContext
  ) {
    return userLoader.load(workout.workoutUserId);
  }

  @FieldResolver(() => [Workout])
  workExercise(
    @Root() workout: Workout,

    @Ctx() { exerciseLoader }: MyContext
  ) {
    return exerciseLoader.load(workout.id);
  }

  @Query(() => Workout, { nullable: true })
  async workout(
    @Arg("id", () => Int) id: number
  ): Promise<Workout | undefined> {
    return await Workout.findOne({ id });
  }

  @Query(() => [Workout], { nullable: true })
  async workouts(
    @Arg("limit", () => Int) limit: number
  ): Promise<Workout[] | undefined> {
    const realLimit = Math.min(50, limit);
    return Workout.find({ take: realLimit });
    // relations: ["workExercise"],
    // const workouts = await getConnection()
    //   .getRepository(Workout)
    //   .createQueryBuilder("w")
    //   .orderBy("w.createdAt", "DESC")
    //   .take(realLimit)
    //   .getMany();

    // return workouts;
  }

  @Mutation(() => WorkOutRespone)
  async createWorkout(
    @Arg("input") input: WorkoutInput,
    @Ctx() { req }: MyContext
  ): Promise<WorkOutRespone> {
    const workout = Workout.create({
      ...input,
      workoutUserId: req.session.userId || 1,
    });

    try {
      await workout.save();
    } catch (err) {
      return {
        error: [
          {
            errCode: err.code,
            message: err.detail,
          },
        ],
      };
    }

    return { workout };
  }

  @Mutation(() => WorkOutRespone)
  async updateWorkout(
    @Arg("id", () => Int) id: number,
    @Arg("title") title: string,
    @Ctx() { req }: MyContext
  ): Promise<WorkOutRespone> {
    let result = null;

    try {
      result = await getConnection()
        .createQueryBuilder()
        .update(Workout)
        .set({ title: title })
        .where("id = :id and workoutUserId = :workoutUserId", {
          id,
          workoutUserId: req.session.userId,
        })
        .returning("*")
        .execute();
    } catch (err) {
      console.log({ code: err.code });
      return {
        error: [
          {
            errCode: err.code,
            message: err.detail,
          },
        ],
      };
    }

    return { workout: result.raw[0] };
  }

  @Mutation(() => Boolean)
  async deleteWorkout(@Arg("id", () => Int) id: number): Promise<boolean> {
    await Workout.delete({ id });

    return true;
  }
}
