import validator from "validator";

export const titleValidator = (value) => {
  if (!validator.isLength(value.title, { min: 3, max: 25 })) {
    return [
      {
        field: "title",
        message: "title Length Should be between 4 to 25",
      },
    ];
  }

  return null;
};
