import {
  Heading,
  SimpleGrid,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import Layout from "../components/Layout";

interface Props {}

const Profile = (props: Props) => {
  return (
    <Layout>
      <Fragment>
        <Heading mt={20} size={"2xl"}>
          Profile
        </Heading>
        <Text mt={3} fontSize="4xl">
          Rishabh Kanojiya
        </Text>

        <SimpleGrid>
          <Table variant="simple">
            <TableCaption placement="top">All User Info </TableCaption>
            <Thead>
              <Tr>
                <Th>Types</Th>
                {/* <Th>into</Th> */}
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Workouts</Td>
                {/* <Td>millimetres (mm)</Td> */}
                <Td isNumeric>25.4</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                {/* <Th>into</Th> */}
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </SimpleGrid>
      </Fragment>
    </Layout>
  );
};

export default Profile;
