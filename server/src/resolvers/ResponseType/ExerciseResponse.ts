import { Exercise } from "../../entites/Exercise";
import { Field, ObjectType } from "type-graphql";
import { FieldError } from "../inputType/FieldError";

@ObjectType()
export class ExerciseRespone {
  @Field(() => FieldError, { nullable: true })
  error?: FieldError;

  @Field(() => Exercise, { nullable: true })
  exercise?: Exercise;
}
