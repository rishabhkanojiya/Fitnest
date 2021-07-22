import { LoginMutation, MeQuery } from "../../../generated/graphql";
import { LoginResp } from "../Response";

export interface LoginContextType {
  data: MeQuery;
  setUserObj: <T>(userVal: T, callback?: any) => void;
  delUserObj: () => void;
}

export interface PopUpContextType {
  data: {};
  setPopupMessageObj: (msg: string, callback: any) => void;
}
