import React, { useState } from "react";
import { LoginContext, ShowPopupContext } from ".";
import { apiError, sKeyType } from "../constant/errors/errors";
import { LoginResp } from "../constant/Types/Response";
import { MeQuery, useLoginMutation } from "../generated/graphql";

export const ShowPopupProvider = (props) => {
  let [messageObj, setMessage] = useState({});
  let [showPopup, setShowPopup] = useState(false);

  const setPopupMessageObj = (
    sKey: sKeyType,
    errorCodeP: string,
    callback
  ): void => {
    const val = apiError(sKey, errorCodeP);
    // const val = apiError.getVal(sKey, errorCodeP);
    setMessage(val);
    setShowPopup(true);

    if (showPopup) {
      if (callback) {
        callback();
      }
    }
  };

  return (
    <ShowPopupContext.Provider
      value={{
        data: messageObj,
        showPopup,
        setPopupMessageObj,
        setShowPopup,
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
