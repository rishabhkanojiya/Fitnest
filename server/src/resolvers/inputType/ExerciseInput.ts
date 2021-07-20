import { Field, InputType } from "type-graphql";

@InputType()
export class ExerciseInput {
  // @Field()
  // workoutId!: number;

  @Field()
  name!: string;

  @Field()
  bodyPart!: string;

  // @Field()
  // workout!: string;
}
