import { Field, InputType } from "type-graphql";

@InputType()
export class ExerciseInput {
  @Field()
  name!: string;

  @Field()
  bodyPart!: string;

  // @Field()
  // workout!: string;
}
