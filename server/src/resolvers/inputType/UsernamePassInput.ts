import { Field, InputType } from "type-graphql";

@InputType()
export class UsernamePassInput {
  @Field()
  username: string;
  @Field()
  email: string;
  @Field()
  password: string;
}
