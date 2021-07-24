import { CloseIcon } from "@chakra-ui/icons";
import {
  Tr,
  Td,
  Heading,
  Table,
  Thead,
  Th,
  Tbody,
  Box,
  Button,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import {
  ExerciseList,
  useCreateExerciseMutation,
  useDeleteExerciseMutation,
  useExercisesJsonQuery,
} from "../../generated/graphql";
import Layout from "../Layout";
import NewSet from "./NewSet";

interface Props {
  // setExerciseCb: (ex: ExerciseList) => void;
  // setOpenExer: (val: boolean) => void;
}

const NewExercise = ({}: Props) => {
  const [openExer, setOpenExer] = useState(false);
  const [exercise, setExercise] = useState<ExerciseList[]>([]);

  const [createExer] = useCreateExerciseMutation();
  const [deleteExer] = useDeleteExerciseMutation();

  const { data } = useExercisesJsonQuery({ variables: { limit: 50 } });

  const renderUserExe = (exer: ExerciseList[]) => {
    return exer.map((ex) => {
      return (
        <Fragment key={ex.id}>
          <SimpleGrid columns={2}>
            <Heading mt={5} size={"md"} textAlign="center">
              {ex.name}
            </Heading>

            <IconButton
              onClick={() => {
                const x = exer.filter((e) => e.id !== ex.id);
                setExercise(x);
              }}
              // colorScheme="teal"
              variant="ghost"
              aria-label="Call Segun"
              icon={<CloseIcon />}
              // isLoading={isSubmitting}
            />
          </SimpleGrid>
          <NewSet exerciseId={ex.id} />
        </Fragment>
      );
    });
  };

  const renderExerciseList = () => {
    return data?.exercisesJson?.map((ex) => {
      return (
        <Tr
          key={ex.id}
          onClick={() => {
            setExercise([...exercise, ex]);
            setOpenExer(false);
          }}
        >
          <Td>{ex.id + 1}</Td>
          <Td>{ex.name}</Td>
          <Td>{ex.bodyPart}</Td>
        </Tr>
      );
    });
  };
  return (
    <Fragment>
      <Heading mt={5} size={"2xl"}>
        Exercise
      </Heading>

      {exercise.length ? renderUserExe(exercise) : <Fragment />}
      {!openExer ? (
        <Box textAlign="center">
          <Button onClick={() => setOpenExer(true)}>Add Exercise</Button>
        </Box>
      ) : (
        <Table variant="striped" colorScheme="teal" my={5}>
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>BodyPart</Th>
              {/* <Th isNumeric>multiply by</Th> */}
            </Tr>
          </Thead>

          <Tbody>{renderExerciseList()}</Tbody>
        </Table>
      )}
    </Fragment>
  );
};

export default NewExercise;
