import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { Set } from "../entites/Set";
import { SetInput } from "./inputType/SetInput";

@Resolver()
export class SetResolver {
  @Query(() => Set, { nullable: true })
  async set(@Arg("id", () => Int) id: number): Promise<Set | undefined> {
    return await Set.findOne({ id });
  }

  @Query(() => [Set], { nullable: true })
  async sets(
    @Arg("limit", () => Int) limit: number
  ): Promise<Set[] | undefined> {
    const realLimit = Math.min(50, limit);

    const Sets = await getConnection()
      .getRepository(Set)
      .createQueryBuilder("w")
      .orderBy("w.createdAt", "DESC")
      .take(realLimit)
      .getMany();

    return Sets;
  }

  @Query(() => [Set], { nullable: true })
  async exerciseSet(
    @Arg("limit", () => Int) limit: number,
    @Arg("id", () => Int) id: number
  ): Promise<Set[] | undefined> {
    const realLimit = Math.min(50, limit);

    const Sets = await getConnection()
      .getRepository(Set)
      .createQueryBuilder("s")
      .where("s.exerciseId = :id", { id })
      // .orderBy("s.createdAt", "DESC")
      .take(realLimit)
      .getMany();

    return Sets;
  }

  @Mutation(() => Set)
  async createSet(@Arg("input") input: SetInput): Promise<Set> {
    return Set.create({ ...input }).save();
  }

  @Mutation(() => Set)
  async updateSet(
    @Arg("id", () => Int) id: number,
    @Arg("setNo", () => Int) setNo: number,
    @Arg("weight", () => Int) weight: number,
    @Arg("reps", () => Int) reps: number,
    @Arg("setType") setType: string
  ): Promise<Set> {
    const result = await getConnection()
      .createQueryBuilder()
      .update(Set)
      .set({
        setNo,
        weight,
        reps,
        setType,
      })
      .where("id = :id", {
        id,
      })
      .returning("*")
      .execute();

    return result.raw[0];
  }

  @Mutation(() => Boolean)
  async deleteSet(@Arg("id", () => Int) id: number): Promise<boolean> {
    await Set.delete({ id });

    return true;
  }
}
