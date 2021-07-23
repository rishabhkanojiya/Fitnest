import validator from "validator";

export function exerciseValidator(value) {
  if (!validator.isLength(value.name, { min: 4, max: 25 })) {
    return [
      {
        field: "name",
        message: "Length Should be between 4 to 25",
      },
    ];
  }

  if (!validator.isLength(value.bodyPart, { min: 4, max: 25 })) {
    return [
      {
        field: "bodyPart",
        message: "Length Should be between 4 to 25",
      },
    ];
  }

  if (!validator.isLength(value.exerciseWorkId, { min: 4, max: 25 })) {
    return [
      {
        field: "exerciseWorkId",
        message: "Length Should be between 4 to 25",
      },
    ];
  }

  return null;
}
