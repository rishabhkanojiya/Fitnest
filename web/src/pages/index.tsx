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
import { useRouter } from "next/dist/client/router";
import React, { Fragment } from "react";
import Layout from "../components/Layout";
import { isServer } from "../constant/actions";
import configs from "../constant/configs";
import { withApollo } from "../constant/withApollo";

interface Props {}

const index = (props: Props) => {
  const router = useRouter();

  if (!isServer()) {
    router.push(configs.enumUrl.profile.link);
  }

  return (
    <Layout>
      <Fragment></Fragment>
    </Layout>
  );
};

export default withApollo({ ssr: false })(index);
