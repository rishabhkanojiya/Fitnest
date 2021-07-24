import {
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
import React, { Fragment } from "react";
import { LoginContextType } from "../../constant/Types/Context";
import { LoginContext } from "../../Context";
import { Consume } from "../../Context/Consumer";
import { useUserWorkoutsQuery } from "../../generated/graphql";
import TableSkel from "../Skeleton/table";
import Title from "./title";
import NewExercise from "./NewExercise";

interface Props {
  LoginData: LoginContextType;
}

const WorkoutTab = ({ LoginData }: Props) => {
  let data, loading;

  if (LoginData?.data?.me?.id) {
    let userWOrk = useUserWorkoutsQuery({
      variables: { id: LoginData?.data?.me?.id, limit: 10 },
    });

    data = userWOrk.data;
    loading = userWOrk.loading;
  }

  console.log(loading, data);
  const renderUserWorks = () => {
    if (loading) {
      //   clg;
    }
  };

  if (!data) {
    return <TableSkel />;
  }

  return (
    <Fragment>
      {/* <Title />
      <NewExercise /> */}
      <Heading size="lg" m={2}>
        Title
      </Heading>

      <Heading size="md" m={2}>
        Exercise
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
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
      </Table>
    </Fragment>
  );
};

export default Consume(WorkoutTab, [LoginContext]);
