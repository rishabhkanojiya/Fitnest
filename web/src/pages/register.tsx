import { Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import router from "next/dist/client/router";
import React from "react";
import InputField from "../components/InputField";
import Layout from "../components/Layout";

interface Props {}

const Register = (props: Props) => {
  return (
    <Layout>
      <Formik
        initialValues={{ username: "", password: "", email: "" }}
        onSubmit={async (values, { setErrors }) => {
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
            />
            <InputField name={"email"} label={"Email"} placeholder={"email"} />
            <InputField
              name={"password"}
              label={"Password"}
              placeholder={"Password"}
              type="password"
            />

            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default Register;
