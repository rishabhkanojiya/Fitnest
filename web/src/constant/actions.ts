export const toErrorMap = (errors): Record<string, string> => {
  const errMap: Record<string, string> = {};
  errors.map(({ field, message }) => {
    errMap[field] = message;
  });

  return errMap;
};

export const trimVal = (
  values: Record<string, string>
): Record<string, string> => {
  Object.keys(values).map((key: string) => {
    if (key !== "password") {
      values[key] = values[key].trim().toLocaleLowerCase();
    }
  });

  return values;
};

export const isServer = () => typeof Window === "undefined";
