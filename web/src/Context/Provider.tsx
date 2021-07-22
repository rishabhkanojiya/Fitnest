import React, { useState } from "react";
import { LoginContext, ShowPopupContext } from ".";
import { LoginResp } from "../constant/Types/Response";
import { MeQuery, useLoginMutation } from "../generated/graphql";

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
  const [user, setUser] = useState<MeQuery>(null);

  function setUserObj<T>(userVal: T, callback) {
    setUser(userVal);

    if (callback) {
      callback();
    }
  }

  const delUserObj = () => {
    setUser(null);
  };

  return (
    <LoginContext.Provider
      value={{
        data: user,
        setUserObj,
        delUserObj,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
