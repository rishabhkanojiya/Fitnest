import {
  Box,
  Divider,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
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

interface Props {
  LoginData: LoginContextType;
  NewWorkoutData: NewWorkoutContextType;
}

const WorkoutTab = ({ LoginData, NewWorkoutData }: Props) => {
  let data, loading, refetch;

  if (LoginData?.data?.me?.id) {
    let userWork = useUserWorkoutsQuery({
      variables: { id: LoginData?.data?.me?.id, limit: 5 },
    });

    data = userWork?.data?.userWorkouts;
    loading = userWork.loading;
    refetch = userWork.refetch;
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

  if (NewWorkoutData.refetchUserWorks && refetch) {
    refetch();
    NewWorkoutData.setRefetchUserWorks(false);
  }

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

              {renderExer(workExercise)}
            </Box>
          </Fragment>
        );
      });
    }
  };

  if (!data && LoginData?.data?.me?.id) {
    return <TableSkel />;
  }

  return <Fragment>{renderUserWorks(data)}</Fragment>;
};

export default Consume(WorkoutTab, [LoginContext, NewWorkoutContext]);
