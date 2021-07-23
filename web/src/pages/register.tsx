import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import router from "next/dist/client/router";
import React from "react";
import InputField from "../components/InputField";
import Layout from "../components/Layout";
import NextLink from "next/link";
import configs from "../constant/configs";
import { withApollo } from "../constant/withApollo";
import { trimVal, toErrorMap } from "../constant/actions";
import { userValidator } from "../constant/utils/userValidate";
import {
  MeDocument,
  MeQuery,
  useRegisterMutation,
  UsernamePassInput,
} from "../generated/graphql";
import { Consume } from "../Context/Consumer";
import { ShowPopupContext } from "../Context";
import { PopUpContextType } from "../constant/Types/Context";

interface Props {
  ShowPopupData: PopUpContextType;
}

const Register = ({ ShowPopupData }: Props) => {
  const [register] = useRegisterMutation();
  return (
    <Layout>
      <Formik
        initialValues={{ username: "", password: "", email: "" }}
        onSubmit={async (values, { setErrors }) => {
          const newVal = trimVal<typeof values>({ ...values });
          const err = userValidator(newVal);
          if (err) {
            setErrors(toErrorMap(err));
          } else {
            const regRes = await register({
              variables: { option: { ...newVal } },
              update: (caches, { data }) => {
                caches.writeQuery<MeQuery>({
                  query: MeDocument,
                  data: {
                    __typename: "Query",
                    me: data?.register.user,
                  },
                });
              },
            });
            if (regRes.data.register.error) {
              console.log(regRes.data.register.error);

              ShowPopupData.setPopupMessageObj(
                "registerErrors",
                regRes.data.register.error[0].errCode
              );
            } else {
              router.push("/");
            }
          }

          console.log(newVal);

          //   const res = await register({
          //     variables: { options: values },
          //     update: (caches, { data }) => {
          //       caches.writeQuery<MeQuery>({
          //         query: MeDocument,
          //         data: {
          //           __typename: "Query",
          //           me: data?.register.user,
          //         },
          //       });
          //     },
          //   });
          //   if (res.data?.register.error) {
          //     setErrors(actions.toErrorMap(res.data.register.error));
          //   } else if (res.data?.register.user) {
          //     router.push("/");
          //   }
        }}
      >
        {(props) => (
          <Form>
            <InputField
              name={"username"}
              label={"Username"}
              placeholder={"Username"}
              margin={true}
            />
            <InputField name={"email"} label={"Email"} placeholder={"email"} />
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
                  mt={4}
                  colorScheme="teal"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
              <Box textAlign="end">
                <NextLink href={configs.enumUrl.login.link}>
                  <Button
                    mr={4}
                    colorScheme="teal"
                    // isLoading={props.isSubmitting}
                    type="submit"
                  >
                    {configs.enumUrl.login.title}
                  </Button>
                </NextLink>
              </Box>
            </SimpleGrid>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

const RegisterConsumer = Consume(Register, [ShowPopupContext]);

export default withApollo({ ssr: false })(RegisterConsumer);
