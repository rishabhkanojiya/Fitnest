import { EditIcon, CheckIcon } from "@chakra-ui/icons";
import { SimpleGrid, Heading, Flex, IconButton } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React, { Fragment, useEffect, useState } from "react";
import { toErrorMap, trimVal } from "../../constant/actions";
import { NewWorkoutContextType } from "../../constant/Types/Context";
import { titleValidator } from "../../constant/utils/titleValidate";
import { NewWorkoutContext } from "../../Context";
import { Consume } from "../../Context/Consumer";
import {
  useCreateWorkoutMutation,
  useUpdateWorkoutMutation,
  useWorkoutExercisesQuery,
} from "../../generated/graphql";
import InputField from "../InputField";

interface Props {
  NewWorkoutData: NewWorkoutContextType;
  // title: string;
  // setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const Title = ({ NewWorkoutData }: Props) => {
  const [title, setTitle] = useState<string>(null);
  const [edit, setEdit] = useState(false);
  const [work, setWork] = useState(null);
  const [workid, setWorkid] = useState(null);
  const [createWork] = useCreateWorkoutMutation();
  const [updateWork] = useUpdateWorkoutMutation();
  // console.log(workid);

  useEffect(() => {
    if (title) {
      if (edit) {
        updateWork({
          variables: { id: workid, title: title },
        }).then((res) => console.log(res));
      } else {
        createWork({
          variables: { input: { title: title } },
        }).then((res) => {
          NewWorkoutData.setWorkid(res.data.createWorkout.workout.id);

          setWorkid(res.data.createWorkout.workout.id);
        });
      }
    }
  }, [title, edit]);

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
                  // setTitle(null);
                  setEdit(true);
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
                const newVal = trimVal(values);
                const err = titleValidator(newVal);
                if (err) {
                  setErrors(toErrorMap(err));
                } else {
                  setTitle(newVal.title);

                  // setTitle(work.data.createWorkout.workout.title);
                }
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

export default Consume(Title, [NewWorkoutContext]);
