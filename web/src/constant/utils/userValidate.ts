import validator from "validator";

export const userValidator = (value) => {
  if (
    value.username &&
    !validator.isLength(value.username, { min: 4, max: 25 })
  ) {
    return [
      {
        field: "username",
        message: "Username Length Should be between 4 to 25",
      },
    ];
  }

  if (
    value.usernameOrEmail &&
    !validator.isLength(value.usernameOrEmail, { min: 4, max: 25 })
  ) {
    return [
      {
        field: "usernameOrEmail",
        message: "usernameOrEmail Length Should be between 4 to 25",
      },
    ];
  }

  if (value.email && !validator.isEmail(value.email)) {
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
