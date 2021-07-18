import { UsernamePassInput } from "../../resolvers/inputType/UsernamePassInput";
import validator from "validator";

export const userValidate = (options: UsernamePassInput) => {
  if (validator.isLength(options.username, { min: 4, max: 25 })) {
    return [
      {
        field: "username",
        message: "length cant be less than 2",
      },
    ];
  }

  if (validator.isEmail(options.email)) {
    return [
      {
        field: "email",
        message: "length cant be less than 2",
      },
    ];
  }

  if (validator.isStrongPassword(options.password, { minLength: 4 })) {
    return [
      {
        field: "password",
        message: "password length cant be less than 2",
      },
    ];
  }
  return null;
};
