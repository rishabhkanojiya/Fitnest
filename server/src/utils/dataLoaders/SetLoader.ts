import Dataloader from "dataloader";
import { getConnection } from "typeorm";
import { Exercise } from "../../entites/Exercise";
import { Set } from "../../entites/Set";

const setOfExercise = async (ids: readonly number[]) => {
  const exercises = await getConnection()
    .getRepository(Exercise)
    .createQueryBuilder("s")
    .leftJoinAndSelect("s.exerciseSets", "set")
    .where("s.id IN (:...ids)", { ids })
    .getMany();

  return exercises.map((exercise) => exercise.exerciseSets);
};

export const SetLoader = () => new Dataloader<number, Set[]>(setOfExercise);
