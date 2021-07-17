import { Set } from "../../entites/Set";
import { Field, ObjectType } from "type-graphql";
import { FieldError } from "../inputType/FieldError";

@ObjectType()
export class SetRespone {
  @Field(() => FieldError, { nullable: true })
  error?: FieldError;

  @Field(() => Set, { nullable: true })
  set?: Set;
}
