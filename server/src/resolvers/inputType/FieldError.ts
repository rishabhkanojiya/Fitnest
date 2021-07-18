import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class FieldError {
  @Field()
  errCode: string;
  @Field()
  message: string;
}
