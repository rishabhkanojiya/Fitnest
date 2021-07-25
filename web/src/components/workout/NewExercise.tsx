import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  IconButton,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import { NewWorkoutContextType } from "../../constant/Types/Context";
import { NewWorkoutContext } from "../../Context";
import { Consume } from "../../Context/Consumer";
import {
  ExerciseFragFragment,
  useCreateExerciseMutation,
  useDeleteExerciseMutation,
  useExercisesJsonQuery,
  useWorkoutExercisesQuery,
} from "../../generated/graphql";
import ExerList from "./ExerList";
import NewSet from "./NewSet";

interface Props {
  // setExerciseCb: (ex: ExerciseList) => void;
  // setOpenExer: (val: boolean) => void;

  NewWorkoutData?: NewWorkoutContextType;
  page?: boolean;
}

const NewExercise = ({ NewWorkoutData }: Props) => {
  const [openExer, setOpenExer] = useState(false);

  const [createExer] = useCreateExerciseMutation();
  const [deleteExer] = useDeleteExerciseMutation();

  // const { data } = useExercisesJsonQuery({ variables: { limit: 50 } });

  const { data: exercise, loading } = useWorkoutExercisesQuery({
    variables: { limit: 50, id: NewWorkoutData.workid },
  });

  const deleteExerFunc = (id) => {
    deleteExer({
      variables: { id },
      update: (caches) => {
        caches.evict({ fieldName: "workoutExercises" });
      },
    });
  };

  const addExer = (ex) => {
    createExer({
      variables: {
        input: {
          name: ex.name,
          bodyPart: ex.bodyPart,
          exerciseWorkId: NewWorkoutData.workid,
        },
      },
      update: (caches) => {
        caches.evict({ fieldName: "workoutExercises" });
      },
    });
    // setExercise([...exercise, exer.data.createExercise]);
    setOpenExer(false);
  };

  const renderUserExe = (exer: ExerciseFragFragment[]) => {
    return exer.map((ex) => {
      return (
        <Fragment key={ex.id}>
          <SimpleGrid columns={2}>
            <Heading mt={5} size={"md"} textAlign="center">
              {ex.name}
            </Heading>

            <IconButton
              onClick={() => {
                deleteExerFunc(ex.id);
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

  // const renderExerciseList = () => {
  //   return data?.exercisesJson?.map((ex) => {
  //     return (
  //       <Tr
  //         key={ex.id}
  //         onClick={() => {
  //           addExer(ex);
  //         }}
  //       >
  //         <Td>{ex.id + 1}</Td>
  //         <Td>{ex.name}</Td>
  //         <Td>{ex.bodyPart}</Td>
  //       </Tr>
  //     );
  //   });
  // };
  return (
    <Fragment>
      <Heading mt={5} size={"2xl"}>
        Exercise
      </Heading>

      {exercise?.workoutExercises?.length ? (
        renderUserExe(exercise?.workoutExercises)
      ) : (
        <Fragment />
      )}
      {!openExer ? (
        <Box textAlign="center">
          <Button onClick={() => setOpenExer(true)}>Add Exercise</Button>
        </Box>
      ) : (
        <ExerList page={false} addExer={addExer} />

        // <Table variant="striped" colorScheme="teal" my={5}>
        //   {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        //   <Thead>
        //     <Tr>
        //       <Th>Id</Th>
        //       <Th>Name</Th>
        //       <Th>BodyPart</Th>
        //       {/* <Th isNumeric>multiply by</Th> */}
        //     </Tr>
        //   </Thead>

        //   <Tbody>{renderExerciseList()}</Tbody>
        // </Table>
      )}
    </Fragment>
  );
};

export default Consume(NewExercise, [NewWorkoutContext]);
