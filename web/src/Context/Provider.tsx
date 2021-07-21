import React, { useState } from "react";
import { ShowPopupContext } from ".";

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
