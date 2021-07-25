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
import {
  LoginContextType,
  NewWorkoutContextType,
} from "../constant/Types/Context";
import { withApollo } from "../constant/withApollo";
import { LoginContext, NewWorkoutContext } from "../Context";
import { Consume } from "../Context/Consumer";
import {
  useUserWorkoutsCountsQuery,
  useUserWorkoutsQuery,
} from "../generated/graphql";

interface Props {
  LoginData: LoginContextType;
  NewWorkoutData: NewWorkoutContextType;
}

const Profile = ({ LoginData, NewWorkoutData }: Props) => {
  let data, loading;

  if (LoginData?.data?.me?.id) {
    let userWOrk = useUserWorkoutsCountsQuery({
      variables: { id: LoginData?.data?.me?.id },
    });

    data = userWOrk?.data?.workoutCounts;
    loading = userWOrk.loading;
  }

  return (
    <Layout>
      <Fragment>
        <Heading mt={20} size={"2xl"}>
          Profile
        </Heading>
        <Text mt={3} fontSize="4xl">
          {LoginData?.data?.me?.username}
        </Text>

        <SimpleGrid>
          <Table variant="simple">
            <TableCaption placement="top">All User Info </TableCaption>
            <Thead>
              <Tr>
                <Th>Types</Th>
                {/* <Th>into</Th> */}
                <Th isNumeric>Count</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Workouts</Td>
                <Td isNumeric>{data ? data : "-"}</Td>
              </Tr>
            </Tbody>
          </Table>
        </SimpleGrid>
      </Fragment>
    </Layout>
  );
};

const ProfileConsumer = Consume(Profile, [LoginContext, NewWorkoutContext]);

export default withApollo({ ssr: false })(ProfileConsumer);
