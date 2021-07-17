import path from "path";
import { Workout } from "../entites/WorkOut";
import { Exercise } from "../entites/Exercise";
import { User } from "../entites/User";
import { Set } from "../entites/Set";
import { ConnectionOptions } from "typeorm";
export default {
  type: "postgres",
  url: "postgresql://postgres:Sportz@123@localhost:5432/fitnessDev",
  logging: true,
  synchronize: true,
  migrations: [path.join(__dirname, "../migrations/*")],
  entities: [User, Workout, Exercise, Set],
} as ConnectionOptions;
