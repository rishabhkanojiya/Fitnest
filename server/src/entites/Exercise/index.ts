import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
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

  @Field()
  @Column()
  exerciseWorkId: number;

  // @Field(() => [Workout], { nullable: true })
  @ManyToOne(() => Workout, (w) => w.workExercise, { onDelete: "CASCADE" })
  exerciseWork: Workout;

  @Field(() => [Set], { nullable: true })
  @OneToMany(() => Set, (s) => s.exercise)
  exerciseSets: Set[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
