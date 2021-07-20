import Dataloader from "dataloader";
import { getConnection } from "typeorm";
import { Workout } from "../../entites/WorkOut";
import { Exercise } from "src/entites/Exercise";

const setOfExercise = async (ids: readonly number[]) => {
  const workouts = await getConnection()
    .getRepository(Workout)
    .createQueryBuilder("w")
    .leftJoinAndSelect("w.workExercise", "exercise")
    .where("w.id IN (:...ids)", { ids })
    .getMany();

  return workouts.map((workout) => workout.workExercise);
};

export const SetLoader = () =>
  new Dataloader<number, Exercise[]>(setOfExercise);
