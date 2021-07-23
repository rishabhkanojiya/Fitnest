export type sKeyType = "loginErrors" | "workOutError" | "registerErrors";

export type getVal = (sKey: sKeyType, errorCodeP: string) => string;

const data = {
  loginErrors: {
    username: "Username Does Not Exist.",
    password: "Password does not match | Incorrect Password",
    username1: "Username Does Not exist from error.",
  },

  registerErrors: {
    "23505": "Username or Email already exist.",
    // username1: "Username Does Not exist from error",
  },

  workOutError: {
    datatype: "",
  },
};

const defaultError = "somethingWentWrong";

export const apiError: getVal = (sKey, errorCodeP) => {
  let errorMessage = data[sKey] ? data[sKey][errorCodeP] : null;
  if (!errorMessage) {
    errorMessage = defaultError;
  }
  return errorMessage;
};

// export default apiError;
