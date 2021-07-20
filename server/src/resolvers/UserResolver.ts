import bcrypt from "bcryptjs";
import { MyContext } from "src/types";
import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import config from "../config";
import { User } from "../entites/User";
import { UsernamePassInput } from "./inputType/UsernamePassInput";
import { UserResponse } from "./ResponseType/UserResponse";
import validator from "validator";
import { Workout } from "../entites/WorkOut";

@Resolver(User)
export class UserResolver {
  @FieldResolver(() => [Workout])
  workouts(
    @Root() user: User,

    @Ctx() { workoutLoader }: MyContext
  ) {
    return workoutLoader.load(user.id);
  }

  @FieldResolver(() => String)
  email(@Root() user: User, @Ctx() { req }: MyContext) {
    if (req.session.userId === user.id) {
      return user.email;
    }

    return "";
  }

  @Query(() => User, { nullable: true })
  me(@Ctx() { req }: MyContext) {
    const { userId } = req.session;
    if (!userId) {
      return null;
    }
    return User.findOne(userId);
  }

  @Query(() => [User], { nullable: true })
  async allUser(@Ctx() {}: MyContext) {
    return User.find({});
  }

  @Query(() => User, { nullable: true })
  userWokouts(@Ctx() { req }: MyContext) {
    const { userId } = req.session;
    if (!userId) {
      return null;
    }
    return User.findOne(userId);
  }

  // @Mutation(() => UserResponse)
  // async changePassword(
  //   @Arg("token") token: string,
  //   @Arg("newPassword") newPassword: string,
  //   @Arg("confirmPass") confirmPass: string,
  //   @Ctx() { redis, req }: MyContext
  // ): Promise<UserResponse> {
  //   if (newPassword.length <= 2) {
  //     return {
  //       error: [
  //         {
  //           field: "newPassword",
  //           message: "password length cant be less than 2",
  //         },
  //       ],
  //     };
  //   }

  //   if (newPassword !== confirmPass) {
  //     return {
  //       error: [
  //         {
  //           field: "confirmPass",
  //           message: "Confirm Password Does not Match",
  //         },
  //       ],
  //     };
  //   }

  //   const key = config.RESET_PASSWORD + token;
  //   const userId = await redis.get(key);
  //   if (!userId) {
  //     return {
  //       error: [
  //         {
  //           field: "confirmPass",
  //           message: "token Expired",
  //         },
  //       ],
  //     };
  //   }

  //   const parseUserId = parseInt(userId);
  //   const user = await User.findOne({ id: parseUserId });

  //   if (!user) {
  //     return {
  //       error: [
  //         {
  //           field: "token",
  //           message: "User No longer Exist",
  //         },
  //       ],
  //     };
  //   }

  //   await User.update(
  //     { id: parseUserId },
  //     { password: await bcrypt.hash(newPassword, 8) }

  //     // { password: await argon2.hash(newPassword) }
  //   );

  //   await redis.del(key);

  //   req.session.userId = user.id;

  //   return { user };

  //   // const user = await em.findOne(User, { id });
  // }

  // @Mutation(() => Boolean)
  // async forgotPass(
  //   @Arg("email") email: string,

  //   @Ctx() { redis }: MyContext
  // ) {
  //   const user = await User.findOne({ where: { email } });

  //   if (!user) {
  //     return true;
  //   }

  //   const token = uuid();
  //   redis.set(config.RESET_PASSWORD + token, user.id, "ex", 1000 * 60 * 10);

  //   await sendEmail(email, `http://localhost:3000/reset-password/${token}`);

  //   return false;
  // }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UsernamePassInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    // const hashedPass = await argon2.hash(options.password);

    const hashedPass = await bcrypt.hash(options.password, 8);
    let user = User.create({
      username: options.username,
      email: options.email,
      password: hashedPass,
    });
    try {
      await user.save();
    } catch (err) {
      console.log({ code: err.code });

      return {
        error: [
          {
            errCode: err.code,
            message: err.message,
          },
        ],
      };
    }

    req.session.userId = user.id;

    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("usernameOrEmail") usernameOrEmail: string,
    @Arg("password") password: string,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const user = await User.findOne(
      validator.isEmail(usernameOrEmail)
        ? { where: { email: usernameOrEmail } }
        : { where: { username: usernameOrEmail } }
    );

    if (!user) {
      return {
        error: [
          {
            errCode: "username",
            message: "username does not exist",
          },
        ],
      };
    }

    //using argon2
    //removing argon cause causing error on docker image
    // const valid = await argon2.verify(user.password, password);
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return {
        error: [
          {
            errCode: "password",
            message: "password does not match | Incorrect Password",
          },
        ],
      };
    }

    req.session.userId = user.id;

    return {
      user,
    };
  }

  @Mutation(() => Boolean)
  async logout(
    @Ctx()
    { req, res: _res }: MyContext
  ) {
    return new Promise((res) =>
      req.session.destroy((err) => {
        _res.clearCookie(config.COOKIE_NAME);
        if (err) {
          console.log(err);
          res(false);
          return;
        }
        res(true);
      })
    );
  }
}
