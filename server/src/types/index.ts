import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
import { Redis } from "ioredis";
import { ExerciseLoader } from "src/utils/dataLoaders/ExerciseLoader";
import { UserLoader } from "src/utils/dataLoaders/UserLoader";
import { WorkoutLoader } from "src/utils/dataLoaders/WorkoutLoader";

export type MyContext = {
  req: Request & {
    session: Session & Partial<SessionData> & { userId?: number };
  };
  res: Response;
  redis: Redis;
  userLoader: ReturnType<typeof UserLoader>;
  workoutLoader: ReturnType<typeof WorkoutLoader>;
  exerciseLoader: ReturnType<typeof ExerciseLoader>;
};
