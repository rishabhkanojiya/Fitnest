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
import { useDeleteWorkoutMutation } from "../../generated/graphql";
import InputField from "../InputField";
import NewExercise from "./NewExercise";
import NewSet from "./NewSet";
import Title from "./title";

interface Props {
  NewWorkoutData: NewWorkoutContextType;
}

const NewWorkout = ({ NewWorkoutData }: Props) => {
  const [delWorkout] = useDeleteWorkoutMutation();
  return (
    <Fragment>
      <Modal
        size="3xl"
        isOpen={NewWorkoutData.showPopup}
        onClose={() => {
          NewWorkoutData.setShowPopup(false);
          // ShowPopupData.setPopupMessageObj(
          //   "loginErrors",
          //   user.data.login.error[0].errCode
          // );
          delWorkout({ variables: { id: NewWorkoutData?.workid } });
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New workout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Fragment>
              <Title />
              {NewWorkoutData?.workid ? <NewExercise /> : <Fragment />}
            </Fragment>
          </ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              variant="ghost"
              onClick={() => {
                NewWorkoutData.setShowPopup(false);
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default Consume(NewWorkout, [NewWorkoutContext]);
