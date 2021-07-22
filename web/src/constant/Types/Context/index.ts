import { LoginResp } from "../Response";

export interface LoginContextType {
  data: LoginResp;
  setUserObj: (userVal: LoginResp, callback?: any) => void;
}

export interface PopUpContextType {
  data: {};
  setPopupMessageObj: (msg: string, callback: any) => void;
}
