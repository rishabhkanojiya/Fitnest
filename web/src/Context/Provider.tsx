import React, { useState } from "react";
import { LoginContext, ShowPopupContext } from ".";
import { LoginResp } from "../constant/Types/Response";
import { useLoginMutation } from "../generated/graphql";

export const ShowPopupProvider = (props) => {
  let [messageObj, setMessage] = useState({});

  const setPopupMessageObj = (msg, callback) => {
    setMessage(msg);

    if (msg.showMsg == false) {
      if (callback) {
        callback();
      }
    }
  };

  return (
    <ShowPopupContext.Provider
      value={{
        data: messageObj,
        setPopupMessageObj,
      }}
    >
      {props.children}
    </ShowPopupContext.Provider>
  );
};

export const LoginProvider: React.FC = (props) => {
  const [user, setUser] = useState<LoginResp>(null);

  const setUserObj = (userVal: LoginResp, callback) => {
    setUser(userVal);

    if (callback) {
      callback();
    }
  };

  return (
    <LoginContext.Provider
      value={{
        data: user,
        setUserObj,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
