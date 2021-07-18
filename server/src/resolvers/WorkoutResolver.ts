import { Workout } from "../entites/WorkOut";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { WorkoutInput } from "./inputType/WorkoutInput";
import { getConnection } from "typeorm";
import { WorkOutRespone } from "./ResponseType/WorkoutResponse";

@Resolver()
export class WorkoutResolver {
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

    const workouts = await getConnection()
      .getRepository(Workout)
      .createQueryBuilder("w")
      .orderBy("w.createdAt", "DESC")
      .take(realLimit)
      .getMany();

    return workouts;
  }

  @Mutation(() => WorkOutRespone)
  async createWorkout(
    @Arg("input") input: WorkoutInput
  ): Promise<WorkOutRespone> {
    const workout = Workout.create({ ...input });

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
    @Arg("title") title: string
  ): Promise<WorkOutRespone> {
    let result = null;

    try {
      result = await getConnection()
        .createQueryBuilder()
        .update(Workout)
        .set({ title: title })
        .where("id = :id", {
          id,
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
