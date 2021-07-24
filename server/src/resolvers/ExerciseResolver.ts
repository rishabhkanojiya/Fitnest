import { MyContext } from "src/types";
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
import { getConnection } from "typeorm";
import { Exercise } from "../entites/Exercise";
import { ExerciseList } from "../entites/Exercise/ExerciseList";
import elist from "../feed/exercies.json";
import { ExerciseInput } from "./inputType/ExerciseInput";

@Resolver(Exercise)
export class ExerciseResolver {
  @FieldResolver(() => [Set])
  exerciseSets(
    @Root() exercise: Exercise,

    @Ctx() { setLoader }: MyContext
  ) {
    return setLoader.load(exercise.id);
  }

  @Query(() => Exercise, { nullable: true })
  async exercise(
    @Arg("id", () => Int) id: number
  ): Promise<Exercise | undefined> {
    return await Exercise.findOne({ id });
  }

  @Query(() => [Exercise], { nullable: true })
  async exercises(
    @Arg("limit", () => Int) limit: number
  ): Promise<Exercise[] | undefined> {
    const realLimit = Math.min(50, limit);

    const Exercises = await getConnection()
      .getRepository(Exercise)
      .createQueryBuilder("w")
      .orderBy("w.createdAt", "DESC")
      .take(realLimit)
      .getMany();

    return Exercises;
  }

  @Query(() => [ExerciseList], { nullable: true })
  async exercisesJson(
    @Arg("limit", () => Int) limit: number
  ): Promise<ExerciseList[] | undefined> {
    let exercisesListObj: ExerciseList[] = JSON.parse(
      JSON.stringify(elist["exercisesList"])
    );
    // return exercisesList.slice(0, limit);

    // console.log("object");
    return exercisesListObj.slice(0, limit);
  }

  @Query(() => [Exercise], { nullable: true })
  async workoutExercises(
    @Arg("limit", () => Int) limit: number,
    @Arg("id", () => Int) id: number
  ): Promise<Exercise[] | undefined> {
    const realLimit = Math.min(50, limit);
    // return Workout.find({ take: realLimit });
    // relations: ["workExercise"],
    const exercises = await getConnection()
      .getRepository(Exercise)
      .createQueryBuilder("e")
      .where("e.exerciseWorkId = :id", { id })
      .orderBy("e.createdAt", "DESC")
      .take(realLimit)
      .getMany();

    return exercises;
  }

  @Mutation(() => Exercise)
  async createExercise(@Arg("input") input: ExerciseInput): Promise<Exercise> {
    return Exercise.create({ ...input }).save();
  }

  @Mutation(() => Exercise)
  async updateExercise(
    @Arg("id", () => Int) id: number,
    @Arg("name") name: string,
    @Arg("bodyPart") bodyPart: string
  ): Promise<Exercise> {
    const result = await getConnection()
      .createQueryBuilder()
      .update(Exercise)
      .set({ name, bodyPart })
      .where("id = :id", {
        id,
      })
      .returning("*")
      .execute();

    return result.raw[0];
  }

  @Mutation(() => Boolean)
  async deleteExercise(@Arg("id", () => Int) id: number): Promise<boolean> {
    await Exercise.delete({ id });

    return true;
  }
}
