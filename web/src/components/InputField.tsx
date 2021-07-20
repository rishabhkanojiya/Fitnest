import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FieldInputProps, useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  margin?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  size: _,
  margin = false,
  ...props
}) => {
  const [field, { error }] = useField(props);

  return (
    <FormControl isInvalid={!!error} mt={margin ? 4 : 0}>
      {label ? <FormLabel htmlFor={field.name}>{label}</FormLabel> : ""}
      <Input {...field} {...props} id={field.name} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
export default InputField;
