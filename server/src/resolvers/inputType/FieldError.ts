import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class FieldError {
  @Field()
  errCode: number;
  @Field()
  message: string;
}
