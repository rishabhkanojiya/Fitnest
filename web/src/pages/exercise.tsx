import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Heading,
  Box,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Button,
  Input,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { Fragment, useState } from "react";
import InputField from "../components/InputField";
import SetInput from "../components/inputs/SetInput";
import Layout from "../components/Layout";
import NewExercise from "../components/workout/NewExercise";
import { trimVal, toErrorMap } from "../constant/actions";
import { exerciseValidator } from "../constant/utils/exerciseValidator";
import { userValidator } from "../constant/utils/userValidate";
import { withApollo } from "../constant/withApollo";
import { Consume } from "../Context/Consumer";
import { useExercisesJsonQuery } from "../generated/graphql";

interface Props {}

const Exercise = (props: Props) => {
  return (
    <Layout>
      <Fragment>
        <NewExercise />
      </Fragment>
    </Layout>
  );
};

// const ExerciseConsumer = Consume(, []);

export default withApollo({ ssr: false })(Exercise);
