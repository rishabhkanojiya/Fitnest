import {
  Box,
  Heading,
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
import WorkoutTab from "../components/workout/WorkoutTab";
import { withApollo } from "../constant/withApollo";

interface Props {}

const History = (props: Props) => {
  return (
    <Layout>
      <Fragment>
        <Heading mt={20} size={"2xl"}>
          History
        </Heading>

        <Box m={5} p={2}>
          <WorkoutTab />
        </Box>
      </Fragment>
    </Layout>
  );
};

export default withApollo({ ssr: false })(History);
