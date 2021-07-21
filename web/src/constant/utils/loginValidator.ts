import validator from "validator";

export const loginValidator = (value) => {
  if (!validator.isLength(value.usernameOrEmail, { min: 4, max: 25 })) {
    return [
      {
        field: "usernameOrEmail",
        message: "usernameOrEmail Length Should be between 4 to 25",
      },
    ];
  }

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
