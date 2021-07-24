import { CheckIcon } from "@chakra-ui/icons";
import { Tr, Td, Input, IconButton } from "@chakra-ui/react";
import { Form } from "formik";
import React from "react";
import InputField from "../InputField";

interface Props {
  isSubmitting: boolean;
  exerciseId: number;
}

const SetInput = ({ isSubmitting, exerciseId }: Props) => {
  return (
    <Tr>
      <Td>
        <Form id={"sets" + exerciseId}>
          <InputField name={"setNo"} placeholder={"Set"} />
        </Form>
      </Td>
      <Td>
        <Form id="sets">
          <InputField name={"weight"} placeholder={"Weight"} />
        </Form>
      </Td>
      <Td>
        <Form id="sets">
          <InputField name={"reps"} placeholder={"Rassword"} />
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
