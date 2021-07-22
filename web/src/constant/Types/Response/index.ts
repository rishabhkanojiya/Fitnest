import { FetchResult } from "@apollo/client";
import { LoginMutation } from "../../../generated/graphql";

export type LoginResp = FetchResult<
  LoginMutation,
  Record<string, any>,
  Record<string, any>
>;
