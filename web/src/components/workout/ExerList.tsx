import { Tr, Td, Table, Thead, Th, Tbody } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { useExercisesJsonQuery } from "../../generated/graphql";

interface Props {
  page?: boolean;
  addExer?: (ex: any) => void;
}

const ExerList = ({ page, addExer }: Props) => {
  const { data } = useExercisesJsonQuery({ variables: { limit: 50 } });

  const renderExerciseList = () => {
    return data?.exercisesJson?.map((ex) => {
      return (
        <Tr
          key={ex.id}
          onClick={() => {
            if (!page) {
              addExer(ex);
            }
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
      <Table variant="unstyled" colorScheme="teal" my={5}>
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
    </Fragment>
  );
};

export default ExerList;
