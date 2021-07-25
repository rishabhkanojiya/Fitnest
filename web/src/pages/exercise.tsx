import { Tr, Td, Table, Thead, Th, Tbody } from "@chakra-ui/react";
import React, { Fragment } from "react";
import Layout from "../components/Layout";
import ExerList from "../components/workout/ExerList";
import NewExercise from "../components/workout/NewExercise";
import { withApollo } from "../constant/withApollo";
import { Consume } from "../Context/Consumer";
import { useExercisesJsonQuery } from "../generated/graphql";

interface Props {}

const Exercise = (props: Props) => {
  const exerProp = {
    page: true,
  };

  return (
    <Layout>
      <ExerList {...exerProp} />
    </Layout>
  );
};

// const ExerciseConsumer = Consume(, []);

export default withApollo({ ssr: false })(Exercise);
