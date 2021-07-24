import {
  Box,
  Divider,
  Heading,
  SimpleGrid,
  Skeleton,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  LoginContextType,
  NewWorkoutContextType,
} from "../../constant/Types/Context";
import { LoginContext, NewWorkoutContext } from "../../Context";
import { Consume } from "../../Context/Consumer";
import {
  UserWorkFragment,
  useUserWorkoutsQuery,
} from "../../generated/graphql";
import TableSkel from "../Skeleton/table";
import Title from "./title";
import NewExercise from "./NewExercise";
// import { usePrevious } from "../../constant/utils/prevVal";

interface Props {
  LoginData: LoginContextType;
  NewWorkoutData: NewWorkoutContextType;
}

const WorkoutTab = ({ LoginData, NewWorkoutData }: Props) => {
  let data, loading;

  if (LoginData?.data?.me?.id) {
    let userWOrk = useUserWorkoutsQuery({
      variables: { id: LoginData?.data?.me?.id, limit: 5 },
    });

    data = userWOrk?.data?.userWorkouts;
    loading = userWOrk.loading;
  }

  // NewWorkoutData.setUserWOrk(data);

  // function usePrevious(value) {
  //   const ref = useRef();
  //   useEffect(() => {
  //     ref.current = value;
  //   });
  //   return ref.current;
  // }

  // const prevData = usePrevious(usePrevious);

  // if (NewWorkoutData.data !== data) {
  // }

  const renderExer = (workExercise) => {
    return workExercise.map((a) => {
      return (
        <Fragment key={a.id}>
          <Divider />
          <Heading size="md" m={2}>
            {a.name}
          </Heading>
          <Table variant="unstyled">
            <Thead>
              <Tr>
                <Th>Set</Th>
                <Th isNumeric>Weight</Th>
                <Th isNumeric>Reps</Th>
              </Tr>
            </Thead>

            <Tbody>
              {a.exerciseSets.map((s) => {
                return (
                  <Tr key={s.id}>
                    <Td>{s.setNo}</Td>
                    <Td isNumeric>{s.weight}</Td>
                    <Td isNumeric>{s.reps}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Fragment>
      );
    });
  };

  const renderUserWorks = (data: UserWorkFragment[]) => {
    if (data) {
      return data.map(({ id, title, workExercise, workoutUser }) => {
        return (
          <Fragment key={id}>
            <Box p={2} borderWidth="1px" borderRadius="10px" mb="3">
              <Heading size="lg" m={2}>
                {title}
              </Heading>
              {/* {workExercise.map((a) => {
                return (
                  
                );
              })} */}
              {renderExer(workExercise)}
            </Box>
          </Fragment>
        );
      });
    }
  };

  if (!data) {
    return <TableSkel />;
  }

  return (
    <Fragment>
      {/* <Title />
      <NewExercise /> */}

      {renderUserWorks(data)}
    </Fragment>
  );
};

export default Consume(WorkoutTab, [LoginContext, NewWorkoutContext]);
