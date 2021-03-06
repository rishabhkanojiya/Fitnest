import { User } from "../../entites/User";
import { Field, ObjectType } from "type-graphql";
import { FieldError } from "../inputType/FieldError";

@ObjectType()
export class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  error?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}
