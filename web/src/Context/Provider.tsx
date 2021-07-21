import React, { useState } from "react";
import { LoginContext, ShowPopupContext } from ".";

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

export const LoginProvider = (props) => {
  const [user, setUser] = useState(null);

  const setUserObj = (userVal, callback) => {
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
