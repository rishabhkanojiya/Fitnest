import { EditIcon, CheckIcon } from "@chakra-ui/icons";
import {
  SimpleGrid,
  Heading,
  Flex,
  IconButton,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React, { Fragment, useState } from "react";
import {
  LoginContextType,
  NewWorkoutContextType,
} from "../../constant/Types/Context";
import { withApollo } from "../../constant/withApollo";
import { LoginContext, NewWorkoutContext } from "../../Context";
import { Consume } from "../../Context/Consumer";
import InputField from "../InputField";
import NewExercise from "./NewExercise";
import NewSet from "./NewSet";
import Title from "./title";

interface Props {
  NewWorkoutData: NewWorkoutContextType;
}

const NewWorkout = ({ NewWorkoutData }: Props) => {
  const [workout, setWorkout] = useState({
    title: "",
    exercise: [],
    set: [],
  });

  // const titleProps = {
  //   title,
  //   setTitle,
  // };

  // function BasicUsage() {
  //   return (
  //     <>
  //       {/* <Button onClick={onOpen}>Open Modal</Button> */}

  //     </>
  //   )
  // }
  return (
    <Fragment>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Modal
        size="3xl"
        isOpen={NewWorkoutData.showPopup}
        onClose={() => {
          NewWorkoutData.setShowPopup(false);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New workout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Fragment>
              <Title />

              {/* <Box textAlign="center">
                <Button onClick={() => setOpenExer(true)}>Add Exercise</Button>
              </Box> */}
              <NewExercise />
              {/* <Box textAlign="center">
                <Button onClick={() => setOpenSet(true)}>Add Set</Button>
              </Box> */}
            </Fragment>
          </ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              variant="ghost"
              onClick={() => {
                NewWorkoutData.setShowPopup(false);
                setWorkout({ exercise: [], title: "", set: [] });
              }}
            >
              Submit
            </Button>
            {/* <Button
              variant="ghost"
              mr={3}
              onClick={() => {
                NewWorkoutData.setShowPopup(false);
                setWorkout({ exercise: [], title: title, set: [], user: 0 });
              }}
            >
              Close
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default Consume(NewWorkout, [NewWorkoutContext]);
