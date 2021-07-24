import configs from "./configs";

export const toErrorMap = (errors): Record<string, string> => {
  const errMap: Record<string, string> = {};
  errors.map(({ field, message }) => {
    errMap[field] = message;
  });

  return errMap;
};

export function trimVal<T>(values: T): T {
  Object.keys(values).map((key: string) => {
    if (key !== "password" && typeof values[key] !== "number") {
      values[key] = values[key].trim().toLocaleLowerCase();
    }
  });

  return values;
}

export const isServer = () => typeof Window === "undefined";

export const countVal = () => {};
