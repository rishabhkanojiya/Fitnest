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
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React, { Fragment, useState } from "react";
import { NewWorkoutContextType } from "../../constant/Types/Context";
import { withApollo } from "../../constant/withApollo";
import { NewWorkoutContext } from "../../Context";
import { Consume } from "../../Context/Consumer";
import InputField from "../InputField";
import NewExercise from "./NewExercise";
import NewSet from "./NewSet";
import Title from "./title";

interface Props {
  NewWorkoutData: NewWorkoutContextType;
}

const NewWorkout = ({ NewWorkoutData }: Props) => {
  const [title, setTitle] = useState<string>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const titleProps = {
    title,
    setTitle,
  };

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
        isOpen={NewWorkoutData.showPopup}
        onClose={() => {
          NewWorkoutData.setShowPopup(false);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Fragment>
              <Title {...titleProps} />
              <NewExercise />
              <NewSet />
            </Fragment>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              colorScheme="blue"
              mr={3}
              onClick={() => {
                NewWorkoutData.setShowPopup(false);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default Consume(NewWorkout, [NewWorkoutContext]);
