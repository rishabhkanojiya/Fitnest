import { Tr, Td, Heading, Table, Thead, Th, Tbody } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { useExercisesJsonQuery } from "../../generated/graphql";
import Layout from "../Layout";

interface Props {}

const NewExercise = (props: Props) => {
  const { data } = useExercisesJsonQuery({ variables: { limit: 50 } });

  const renderExerciseList = () => {
    return data?.exercisesJson?.map((ex) => {
      return (
        <Tr key={ex.id}>
          <Td>{ex.id + 1}</Td>
          <Td>{ex.name}</Td>
        </Tr>
      );
    });
  };
  return (
    <Fragment>
      <Heading mt={5} size={"2xl"}>
        Exercise
      </Heading>

      <Table variant="striped" colorScheme="teal" my={5}>
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            {/* <Th isNumeric>multiply by</Th> */}
          </Tr>
        </Thead>
        <Tbody>{renderExerciseList()}</Tbody>
      </Table>
    </Fragment>
  );
};

export default NewExercise;
