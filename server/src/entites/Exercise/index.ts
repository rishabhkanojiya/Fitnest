import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Set } from "../Set";
import { Workout } from "../WorkOut";

@ObjectType()
@Entity()
export class Exercise extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  bodyPart!: string;

  // @Field()
  // @Column()
  // workoutId: number;

  @Field(() => [Workout], { nullable: true })
  @ManyToMany(() => Workout, (w) => w.workExercise)
  workouts: Workout[];

  @OneToMany(() => Set, (s) => s.exercise)
  sets: Set[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
