import { MeQuery } from "../../../generated/graphql";
import { LoginResp } from "../Response";

export interface LoginContextType {
  data: MeQuery;
  setUserObj: (userVal: MeQuery, callback?: any) => void;
  delUserObj: () => void;
}

export interface PopUpContextType {
  data: {};
  setPopupMessageObj: (msg: string, callback: any) => void;
}
