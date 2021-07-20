import { Field, InputType } from "type-graphql";

@InputType()
export class SetInput {
  @Field()
  exerciseId!: number;

  @Field()
  setNo!: number;

  @Field()
  weight!: number;

  @Field()
  reps!: number;

  @Field()
  setType!: string;
}
