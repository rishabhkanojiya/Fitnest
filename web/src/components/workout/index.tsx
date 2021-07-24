import { EditIcon, CheckIcon } from "@chakra-ui/icons";
import { SimpleGrid, Heading, Flex, IconButton } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React, { Fragment, useState } from "react";
import InputField from "../InputField";
import NewExercise from "./NewExercise";
import Title from "./title";

interface Props {}

const NewWorkout = (props: Props) => {
  const [title, setTitle] = useState<string>(null);

  const titleProps = {
    title,
    setTitle,
  };
  return (
    <Fragment>
      <Title {...titleProps} />
      <NewExercise />
    </Fragment>
  );
};

export default NewWorkout;
