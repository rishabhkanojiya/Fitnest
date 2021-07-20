import { CheckIcon } from "@chakra-ui/icons";
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
  Button,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { Fragment } from "react";
import InputField from "../components/InputField";
import Layout from "../components/Layout";
import { trimVal, toErrorMap } from "../constant/actions";
import { userValidator } from "../constant/utils/userValidate";

interface Props {}

const Exercise = (props: Props) => {
  return (
    <Layout>
      <Fragment>
        <Heading mt={20} size={"2xl"}>
          Exercise
        </Heading>

        <Formik
          initialValues={{
            set: "",
            previous: "",
            weight: "",
            reps: "",
          }}
          onSubmit={async (values, { setErrors }) => {
            console.log(values);
            // console.log(trimVal({ ...values }));
            const err = userValidator(values);

            if (err) {
              console.log(err);
              setErrors(toErrorMap(err));
              // } else if (res.data?.register.user) {
              //   router.push("/");
            } else {
              console.log("call");
            }
          }}
        >
          {(props) => (
            <Fragment>
              <Table variant="simple">
                <TableCaption placement="top">
                  Imperial to metric conversion factors
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Set</Th>
                    <Th>Previous</Th>
                    <Th isNumeric>Weight</Th>
                    <Th isNumeric>Reps</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Form id="sets">
                        <Input name={"set"} placeholder={"Set"} />
                      </Form>
                    </Td>
                    <Td>
                      <Form id="sets">
                        <Input name={"previous"} placeholder={"Previous"} />
                      </Form>
                    </Td>
                    <Td>
                      <Form id="sets">
                        <Input name={"weight"} placeholder={"Weight"} />
                      </Form>
                    </Td>
                    <Td>
                      <Form id="sets">
                        <Input name={"reps"} placeholder={"Reps"} />
                      </Form>
                    </Td>
                    <Td>
                      <IconButton
                        // colorScheme="teal"
                        variant="ghost"
                        aria-label="Call Segun"
                        size="lg"
                        icon={<CheckIcon />}
                        isLoading={props.isSubmitting}
                        type="submit"
                        form="sets"

                        // CloseIcon
                      />

                      {/* <Button type="submit">T</Button> */}
                    </Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Set</Th>
                    <Th>Previous</Th>
                    <Th isNumeric>Weight</Th>
                    <Th isNumeric>Reps</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </Fragment>
          )}
        </Formik>
      </Fragment>
    </Layout>
  );
};

export default Exercise;
