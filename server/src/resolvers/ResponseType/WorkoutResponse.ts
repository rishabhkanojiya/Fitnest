import { Field, ObjectType } from "type-graphql";
import { FieldError } from "../inputType/FieldError";
import { Workout } from "../../entites/WorkOut";

@ObjectType()
export class WorkOutRespone {
  @Field(() => FieldError, { nullable: true })
  error?: FieldError;

  @Field(() => Workout, { nullable: true })
  WorkOut?: Workout;
}
