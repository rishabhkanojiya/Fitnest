import { Flex, Button, Box, SimpleGrid, Link } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import router from "next/dist/client/router";
import React from "react";
import InputField from "../components/InputField";
import Layout from "../components/Layout";
import NextLink from "next/link";
import configs from "../constant/configs";

interface Props {}

const Login = (props: Props) => {
  return (
    <Layout>
      <Formik
        initialValues={{ usernameOrEmail: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          //   const res = await login({
          //     variables: values,
          //     update: (caches, { data }) => {
          //       caches.writeQuery<MeQuery>({
          //         query: MeDocument,
          //         data: {
          //           __typename: "Query",
          //           me: data?.login.user,
          //         },
          //       });
          //       caches.evict({ fieldName: "post:{}" });
          //     },
          //   });
          //   if (res.data?.login.error) {
          //     setErrors(actions.toErrorMap(res.data.login.error));
          //   } else if (res.data?.login.user) {
          //     if (typeof router.query.next === "string") {
          //       router.push(router.query.next);
          //     } else {
          //       router.push("/");
          //     }
          //   }
        }}
      >
        {(props) => (
          <Form>
            <InputField
              name={"usernameOrEmail"}
              label={"Username Or Email"}
              placeholder={"Username Or Email"}
              margin={true}
            />
            <InputField
              name={"password"}
              label={"Password"}
              placeholder={"Password"}
              type="password"
              margin={true}
            />

            <SimpleGrid columns={2} alignItems="center" mt={4}>
              <Box>
                <Button
                  colorScheme="teal"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Login
                </Button>
              </Box>
              <Box textAlign="end">
                <NextLink href={configs.enumUrl.register.link}>
                  <Button
                    mr={4}
                    colorScheme="teal"
                    isLoading={props.isSubmitting}
                    type="submit"
                  >
                    {configs.enumUrl.register.title}
                  </Button>
                </NextLink>
                <NextLink href="/forgetPass">
                  <Link>Forgot Password?</Link>
                </NextLink>
              </Box>
            </SimpleGrid>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default Login;
