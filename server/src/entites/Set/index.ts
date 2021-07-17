import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Exercise } from "../Exercise";

@ObjectType()
@Entity()
export class Set extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ type: "int" })
  setNo!: number;

  @Field()
  @Column({ type: "int" })
  weight!: number;

  @Field()
  @Column({ type: "int" })
  reps!: number;

  @Field()
  @Column()
  setType!: string;

  @ManyToOne(() => Exercise, (e) => e.sets)
  exercise: Exercise;

  @Field(() => String)
  @CreateDateColumn()
  lastData: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
