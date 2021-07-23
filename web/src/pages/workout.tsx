import { CheckIcon, EditIcon } from "@chakra-ui/icons";
import {
  Heading,
  Box,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  SimpleGrid,
  Flex,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { Fragment, useState } from "react";
import InputField from "../components/InputField";
import Layout from "../components/Layout";
import { withApollo } from "../constant/withApollo";

interface Props {}

const Workout = (props: Props) => {
  const [title, setTitle] = useState(null);
  console.log(title);
  return (
    <Layout>
      <Fragment>
        <Heading mt={20} size={"2xl"}>
          Workout
        </Heading>

        <SimpleGrid columns={3} justifyItems="center" alignItems="center">
          {title ? (
            <Fragment>
              <Heading my={5} size={"md"}>
                {title}
              </Heading>
              <Flex justifySelf="start">
                <IconButton
                  onClick={() => {
                    setTitle(null);
                  }}
                  variant="ghost"
                  aria-label="Call Segun"
                  icon={<EditIcon />}
                  // isLoading={}
                  type="submit"
                  // form="workout"
                />
              </Flex>
            </Fragment>
          ) : (
            <Fragment>
              <Formik
                initialValues={{ title: "" }}
                onSubmit={async (values, { setErrors }) => {
                  setTitle(values.title);
                }}
              >
                {(props) => (
                  <Fragment>
                    <Heading my={5} size={"md"}>
                      Workout Title
                    </Heading>
                    <Flex>
                      <Form id="workout">
                        <InputField
                          name={"title"}
                          // label={"Title"}
                          // value="adsad"
                          placeholder={"Title"}
                        />
                      </Form>
                    </Flex>

                    <Flex>
                      <IconButton
                        variant="ghost"
                        aria-label="Call Segun"
                        icon={<CheckIcon />}
                        isLoading={props.isSubmitting}
                        type="submit"
                        form="workout"
                      />
                    </Flex>
                  </Fragment>
                )}
              </Formik>
            </Fragment>
          )}
        </SimpleGrid>

        <Box m={5} p={2} borderWidth="1px" borderRadius="10px">
          <Table variant="simple">
            <TableCaption placement="top">
              Imperial to metric conversion factors
            </TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
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
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </Box>
      </Fragment>
    </Layout>
  );
};

export default withApollo({ ssr: false })(Workout);
