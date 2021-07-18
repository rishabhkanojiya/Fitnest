export const toErrorMap = (errors): Record<string, string> => {
  const errMap: Record<string, string> = {};
  errors.map(({ field, message }) => {
    errMap[field] = message;
  });

  return errMap;
};
