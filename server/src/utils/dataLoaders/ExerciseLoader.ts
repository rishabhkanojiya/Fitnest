import Dataloader from "dataloader";
import { getConnection } from "typeorm";
import { Workout } from "../../entites/WorkOut";
import { Exercise } from "src/entites/Exercise";

const exerciseOfWorkout = async (ids: readonly number[]) => {
  const workouts = await getConnection()
    .getRepository(Workout)
    .createQueryBuilder("w")
    .leftJoinAndSelect("w.workExercise", "exercise")
    .where("w.id IN (:...ids)", { ids })
    .orderBy("w.createdAt", "DESC")
    .getMany();

  return workouts.map((workout) => workout.workExercise);
};

export const ExerciseLoader = () =>
  new Dataloader<number, Exercise[]>(exerciseOfWorkout);
