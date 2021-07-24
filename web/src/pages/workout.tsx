import { CheckIcon, EditIcon } from "@chakra-ui/icons";
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
  SimpleGrid,
  Flex,
  Input,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { Fragment, useState } from "react";
import InputField from "../components/InputField";
import Layout from "../components/Layout";
import NewWorkout from "../components/workout";
import WorkoutTab from "../components/workout/WorkoutTab";
import { NewWorkoutContextType } from "../constant/Types/Context";
import { withApollo } from "../constant/withApollo";
import { NewWorkoutContext } from "../Context";
import { Consume } from "../Context/Consumer";

interface Props {
  NewWorkoutData: NewWorkoutContextType;
}

const Workout = ({ NewWorkoutData }: Props) => {
  const [title, setTitle] = useState(null);

  return (
    <Layout>
      <Fragment>
        <Heading mt={20} size={"2xl"}>
          Workout
        </Heading>

        <SimpleGrid my={5} mx={25}>
          {/* <Box mx={2}> */}
          <Button
            colorScheme="blue"
            onClick={() => {
              NewWorkoutData.setShowPopup(true);
            }}
          >
            Start An Empty Workout
          </Button>
          {/* </Box> */}
        </SimpleGrid>
        <Box m={5} p={2}>
          <WorkoutTab />
        </Box>

        <NewWorkout />
      </Fragment>
    </Layout>
  );
};

const WorkoutConsumer = Consume(Workout, [NewWorkoutContext]);

export default withApollo({ ssr: false })(WorkoutConsumer);
