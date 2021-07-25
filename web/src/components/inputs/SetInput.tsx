import { CheckIcon } from "@chakra-ui/icons";
import { Tr, Td, Input, IconButton } from "@chakra-ui/react";
import { Form } from "formik";
import React from "react";
import InputField from "../InputField";

interface Props {
  setNoId: number;
  isSubmitting: boolean;
  exerciseId: number;
}

const SetInput = ({ isSubmitting, exerciseId, setNoId }: Props) => {
  return (
    <Tr>
      <Td>{setNoId}</Td>
      <Td>
        <Form id={"sets" + exerciseId}>
          <InputField name={"weight"} placeholder={"Weight"} />
        </Form>
      </Td>
      <Td>
        <Form id={"sets" + exerciseId}>
          <InputField name={"reps"} placeholder={"Password"} />
        </Form>
      </Td>
      <Td>
        <IconButton
          // colorScheme="teal"
          variant="ghost"
          aria-label="Call Segun"
          icon={<CheckIcon />}
          isLoading={isSubmitting}
          type="submit"
          form={"sets" + exerciseId}

          // CloseIcon
        />
      </Td>
    </Tr>
  );
};

export default SetInput;
