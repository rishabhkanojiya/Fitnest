import { User } from "../entites/User";
import { Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  me() {
    return "i m user";
  }
}
