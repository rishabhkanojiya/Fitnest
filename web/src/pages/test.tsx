import { Box, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import InputField from "../components/InputField";
import { toErrorMap, trimVal } from "../constant/actions";
import { userValidator } from "../constant/utils/userValidate";

interface Props {}

const Test = (props: Props) => {
  return (
    <Box maxW="800px" w="100%" m="auto" mt={8}>
      <Formik
        initialValues={{ username: "", password: "", email: "" }}
        onSubmit={async (values, { setErrors }) => {
          console.log(values);
          console.log(trimVal({ ...values }));
          const err = userValidator(values);

          if (err) {
            console.log(err);
            setErrors(toErrorMap(err));
            // } else if (res.data?.register.user) {
            //   router.push("/");
          } else {
            console.log("call");
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
          }
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
    </Box>
  );
};

export default Test;
