import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cors from "cors";
import express from "express";
import session from "express-session";
import Redis from "ioredis";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import config from "./config";
import typeOrmCOnfig from "./config/typeOrm.config";
import { ExerciseResolver } from "./resolvers/ExerciseResolver";
import { SetResolver } from "./resolvers/SetResolver";
import { UserResolver } from "./resolvers/UserResolver";
import { WorkoutResolver } from "./resolvers/WorkoutResolver";
import { UserLoader } from "./utils/dataLoaders/UserLoader";
import { WorkoutLoader } from "./utils/dataLoaders/WorkoutLoader";
import { ExerciseLoader } from "./utils/dataLoaders/ExerciseLoader";
import { SetLoader } from "./utils/dataLoaders/SetLoader";

const main = async () => {
  await createConnection(typeOrmCOnfig);

  const app = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis("127.0.0.1:6379");

  app.set("trust proxy", 1);

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(
    session({
      name: config.COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
        sameSite: "lax",
        secure: config.__prod__,
        domain: config.__prod__ ? ".relise.xyz" : undefined,
      },
      saveUninitialized: false,
      secret: "asdasdasdasd asdasdasda sdasdasd asd as d sa",
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, WorkoutResolver, ExerciseResolver, SetResolver],

      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      redis,
      userLoader: UserLoader(),
      workoutLoader: WorkoutLoader(),
      exerciseLoader: ExerciseLoader(),
      setLoader: SetLoader(),
    }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(4000, () => {
    console.log(`App on ${4000}`);
  });
};

main().catch((err) => {
  console.log(err);
});
