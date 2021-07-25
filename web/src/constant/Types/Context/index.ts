import {
  LoginMutation,
  MeQuery,
  UserWorkFragment,
} from "../../../generated/graphql";
import { sKeyType } from "../../errors/errors";
import { LoginResp } from "../Response";

// LoginData
export interface LoginContextType {
  data: MeQuery;
  setUserObj: <T>(userVal: T, callback?: any) => void;
  delUserObj: () => void;
}
// ShowPopupData
export interface PopUpContextType {
  data: {};
  setPopupMessageObj: (sKey: sKeyType, errorCodeP: string, callback?) => void;
  showPopup: Boolean;
  setShowPopup: (val: Boolean) => void;
}
// NewWorkoutData
export interface NewWorkoutContextType {
  data: {};
  workid: number;
  NewWorkoutMessageObj: (sKey: sKeyType, errorCodeP: string, callback?) => void;
  showPopup: boolean;
  setWorkid: (id: number) => void;
  setShowPopup: (val: Boolean) => void;
  userWOrk: UserWorkFragment;
  setUserWOrk: (val: UserWorkFragment) => void;
  refetchUserWorks: boolean;
  setRefetchUserWorks: (val: boolean) => void;
}
