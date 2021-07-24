import { EditIcon, CheckIcon } from "@chakra-ui/icons";
import { SimpleGrid, Heading, Flex, IconButton } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React, { Fragment } from "react";
import InputField from "../InputField";

interface Props {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const Title = ({ title, setTitle }: Props) => {
  return (
    <Fragment>
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
                    Title
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
    </Fragment>
  );
};

export default Title;
