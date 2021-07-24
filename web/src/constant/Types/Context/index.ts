import { LoginMutation, MeQuery } from "../../../generated/graphql";
import { sKeyType } from "../../errors/errors";
import { LoginResp } from "../Response";

export interface LoginContextType {
  data: MeQuery;
  setUserObj: <T>(userVal: T, callback?: any) => void;
  delUserObj: () => void;
}

export interface PopUpContextType {
  data: {};
  setPopupMessageObj: (sKey: sKeyType, errorCodeP: string, callback?) => void;
  showPopup: Boolean;
  setShowPopup: (val: Boolean) => void;
}

export interface NewWorkoutContextType {
  data: {};
  workid: number;
  NewWorkoutMessageObj: (sKey: sKeyType, errorCodeP: string, callback?) => void;
  showPopup: boolean;
  setWorkid: (id: number) => void;
  setShowPopup: (val: Boolean) => void;
}
