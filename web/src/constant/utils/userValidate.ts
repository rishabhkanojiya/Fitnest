import validator from "validator";

export const userValidator = (value) => {
  if (!validator.isLength(value.username, { min: 4, max: 25 })) {
    return [
      {
        field: "username",
        message: "Username Length Should be between 4 to 25",
      },
    ];
  }

  if (!validator.isEmail(value.email)) {
    return [
      {
        field: "email",
        message: "Invalid Email",
      },
    ];
  }
  //   if (!validator.isStrongPassword(value.password, { minLength: 4 })) {

  if (!validator.isLength(value.password, { min: 4, max: 25 })) {
    return [
      {
        field: "password",
        message: "Please use strong passowrd",
      },
    ];
  }
  return null;
};
