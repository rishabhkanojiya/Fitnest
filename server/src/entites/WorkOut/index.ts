import { Field, Int, ObjectType } from "type-graphql";
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
import { Exercise } from "../Exercise";
import { User } from "../User";

@ObjectType()
@Entity()
export class Workout extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  title!: string;

  @Field(() => String)
  @UpdateDateColumn()
  lastPerformed!: Date;

  @Field()
  @Column()
  workoutUserId: number;

  // @Field()
  // @Column()
  // exerciseId: number;

  @Field()
  @ManyToOne(() => User, (u) => u.workouts)
  workoutUser: User;

  // @Field(() => [Exercise], { nullable: true })
  @OneToMany(() => Exercise, (e) => e.exerciseWork)
  workExercise: Exercise[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
