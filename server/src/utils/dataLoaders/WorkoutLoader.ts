import Dataloader from "dataloader";
import { User } from "../../entites/User";
import { getConnection } from "typeorm";
import { Workout } from "../../entites/WorkOut";

const tagsOfPosts = async (ids: readonly number[]) => {
  const users = await getConnection()
    .getRepository(User)
    .createQueryBuilder("u")
    .leftJoinAndSelect("u.workouts", "workout")
    .where("u.id IN (:...ids)", { ids })
    .getMany();

  return users.map((user) => user.workouts);
};

export const WorkoutLoader = () =>
  new Dataloader<number, Workout[]>(tagsOfPosts);
