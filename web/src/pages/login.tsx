import { Box, Button, Link, SimpleGrid } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import NextLink from "next/link";
import React from "react";
import InputField from "../components/InputField";
import Layout from "../components/Layout";
import { toErrorMap, trimVal } from "../constant/actions";
import configs from "../constant/configs";
import { LoginContextType, PopUpContextType } from "../constant/Types/Context";
import { userValidator } from "../constant/utils/userValidate";
import { withApollo } from "../constant/withApollo";
import { LoginContext, ShowPopupContext } from "../Context";
import { Consume } from "../Context/Consumer";
import { useLoginMutation } from "../generated/graphql";

interface Props {
  LoginData: LoginContextType;
  ShowPopupData: PopUpContextType;
}

const Login = ({ LoginData }: Props) => {
  const [login] = useLoginMutation();
  return (
    <Layout>
      <Formik
        initialValues={{ usernameOrEmail: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const newVal = trimVal<typeof values>({ ...values });
          const err = userValidator(newVal);
          if (err) {
            setErrors(toErrorMap(err));
          } else {
            const user = await login({ variables: newVal });
            if (user.data.login.error) {
            } else {
              LoginData.setUserObj(user);
            }
          }

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

const LoginConsumer = Consume(Login, [LoginContext, ShowPopupContext]);

export default withApollo({ ssr: false })(LoginConsumer);
