import validator from "validator";

export function setValidator(value) {
  if (!validator.isNumeric(value.setNo)) {
    return [
      {
        field: "setNo",
        message: "Should be Numeric",
      },
    ];
  }
  if (!validator.isNumeric(value.weight)) {
    return [
      {
        field: "weight",
        message: "Should be Numeric",
      },
    ];
  }
  if (!validator.isNumeric(value.reps)) {
    return [
      {
        field: "reps",
        message: "Should be Numeric",
      },
    ];
  }

  return null;
}
