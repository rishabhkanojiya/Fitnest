// import { User } from "../entites/User";
// import { MyContext } from "src/types";
// import bcrypt from "bcryptjs";
// import {
//   Arg,
//   Ctx,
//   Field,
//   FieldResolver,
//   Mutation,
//   ObjectType,
//   Query,
//   Resolver,
//   Root,
// } from "type-graphql";
// import config from "../config";
// import { UsernamePassInput } from "./inputType/UsernamePassInput";
// // import util from "../utils/util";
// // import { sendEmail } from "../services/nodemailer/sendEmail";
// import { v4 as uuid } from "uuid";
// import { UserResponse } from "./ResponseType/UserResponse";
// import validator from "validator";

// // import { getConnection } from "typeorm";

// @Resolver(User)
// export class UserResolver {
//   @FieldResolver(() => String)
//   email(@Root() user: User, @Ctx() { req }: MyContext) {
//     if (req.session.userId === user.id) {
//       return user.email;
//     }

//     return "";
//   }

//   @Query(() => User, { nullable: true })
//   me(@Ctx() { req }: MyContext) {
//     const { userId } = req.session;
//     if (!userId) {
//       return null;
//     }

//     return User.findOne(userId);
//   }

//   // @Mutation(() => UserResponse)
//   // async changePassword(
//   //   @Arg("token") token: string,
//   //   @Arg("newPassword") newPassword: string,
//   //   @Arg("confirmPass") confirmPass: string,
//   //   @Ctx() { redis, req }: MyContext
//   // ): Promise<UserResponse> {
//   //   if (newPassword.length <= 2) {
//   //     return {
//   //       error: [
//   //         {
//   //           field: "newPassword",
//   //           message: "password length cant be less than 2",
//   //         },
//   //       ],
//   //     };
//   //   }

//   //   if (newPassword !== confirmPass) {
//   //     return {
//   //       error: [
//   //         {
//   //           field: "confirmPass",
//   //           message: "Confirm Password Does not Match",
//   //         },
//   //       ],
//   //     };
//   //   }

//   //   const key = config.RESET_PASSWORD + token;
//   //   const userId = await redis.get(key);
//   //   if (!userId) {
//   //     return {
//   //       error: [
//   //         {
//   //           field: "confirmPass",
//   //           message: "token Expired",
//   //         },
//   //       ],
//   //     };
//   //   }

//   //   const parseUserId = parseInt(userId);
//   //   const user = await User.findOne({ id: parseUserId });

//   //   if (!user) {
//   //     return {
//   //       error: [
//   //         {
//   //           field: "token",
//   //           message: "User No longer Exist",
//   //         },
//   //       ],
//   //     };
//   //   }

//   //   await User.update(
//   //     { id: parseUserId },
//   //     { password: await bcrypt.hash(newPassword, 8) }

//   //     // { password: await argon2.hash(newPassword) }
//   //   );

//   //   await redis.del(key);

//   //   req.session.userId = user.id;

//   //   return { user };

//   //   // const user = await em.findOne(User, { id });
//   // }

//   // @Mutation(() => Boolean)
//   // async forgotPass(
//   //   @Arg("email") email: string,

//   //   @Ctx() { redis }: MyContext
//   // ) {
//   //   const user = await User.findOne({ where: { email } });

//   //   if (!user) {
//   //     return true;
//   //   }

//   //   const token = uuid();
//   //   redis.set(config.RESET_PASSWORD + token, user.id, "ex", 1000 * 60 * 10);

//   //   await sendEmail(email, `http://localhost:3000/reset-password/${token}`);

//   //   return false;
//   // }

//   @Mutation(() => UserResponse)
//   async register(
//     @Arg("options") options: UsernamePassInput,
//     @Ctx() { req }: MyContext
//   ): Promise<UserResponse> {
//     const error = util.validate(options);

//     if (error) {
//       return { error };
//     }

//     // const hashedPass = await argon2.hash(options.password);
//     const hashedPass = await bcrypt.hash(options.password, 8);
//     let user = User.create({
//       username: options.username,
//       email: options.email,
//       password: hashedPass,
//     });
//     try {
//       // queryBuiler code
//       // const result = await getConnection()
//       //   .createQueryBuilder()
//       //   .insert()
//       //   .into(User)
//       //   .values({
//       //     username: options.username,
//       //     email: options.email,
//       //     password: options.password,
//       //   })
//       //   .returning("*")
//       //   .execute();
//       await user.save();
//     } catch (err) {
//       console.log(err.message);

//       if (err.code === "23505" || err.detail.includes("already exists.")) {
//         return {
//           error: [
//             {
//               field: "username",
//               message: "Username already exsist",
//             },
//           ],
//         };
//       }
//     }

//     req.session.userId = user.id;

//     return { user };
//   }

//   @Mutation(() => UserResponse)
//   async login(
//     @Arg("usernameOrEmail") usernameOrEmail: string,
//     @Arg("password") password: string,
//     @Ctx() { req }: MyContext
//   ): Promise<UserResponse> {
//     const user = await User.findOne(
//       usernameOrEmail.includes("@")
//         ? { where: { email: usernameOrEmail } }
//         : { where: { username: usernameOrEmail } }
//     );
//     if (!user) {
//       return {
//         error: [
//           {
//             field: "username",
//             message: "username does not exist",
//           },
//         ],
//       };
//     }

//     //using argon2
//     //removing argon cause causing error on docker image
//     // const valid = await argon2.verify(user.password, password);
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return {
//         error: [
//           {
//             field: "password",
//             message: "password does not match | Incorrect Password",
//           },
//         ],
//       };
//     }

//     req.session.userId = user.id;

//     return {
//       user,
//     };
//   }

//   @Mutation(() => Boolean)
//   async logout(
//     @Ctx()
//     { req, res: _res }: MyContext
//   ) {
//     return new Promise((res) =>
//       req.session.destroy((err) => {
//         _res.clearCookie(config.COOKIE_NAME);
//         if (err) {
//           console.log(err);
//           res(false);
//           return;
//         }
//         res(true);
//       })
//     );
//   }
// }
