import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
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
  SimpleGrid,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { Fragment, useState } from "react";
import InputField from "../components/InputField";
import SetInput from "../components/inputs/SetInput";
import Layout from "../components/Layout";
import { trimVal, toErrorMap } from "../constant/actions";
import { exerciseValidator } from "../constant/utils/exerciseValidator";
import { userValidator } from "../constant/utils/userValidate";
import { withApollo } from "../constant/withApollo";
import { Consume } from "../Context/Consumer";
import { useExercisesJsonQuery } from "../generated/graphql";

interface Props {}

const Exercise = (props: Props) => {
  const { data } = useExercisesJsonQuery({ variables: { limit: 50 } });

  const [sets, setSets] = useState([]);
  const [id, setId] = useState(1);
  console.log(sets);
  const addSet = (val) => {
    setSets(val);
  };

  const removeSet = (index) => {
    const newSet = sets.filter((a, ind) => a.id !== index);
    setSets(newSet);
  };
  const renderList = () => {
    return sets.map((a, index) => {
      return (
        <Tr key={index}>
          <Td>{a.set}</Td>
          <Td>{a.previous}</Td>
          <Td isNumeric>{a.weight}</Td>
          <Td isNumeric>{a.reps}</Td>
          <Td>
            <IconButton
              variant="ghost"
              aria-label="Call Segun"
              icon={<CloseIcon />}
              my={-2}
              type="submit"
              form="sets"
              onClick={() => removeSet(a.id)}
            />
          </Td>
        </Tr>
      );
    });
  };

  const renderExerciseList = () => {
    return data?.exercisesJson?.map((ex) => {
      return (
        <Tr>
          <Td>{ex.id + 1}</Td>
          <Td>{ex.name}</Td>
        </Tr>
      );
    });
  };
  return (
    <Layout>
      <Fragment>
        <Heading mt={20} size={"2xl"}>
          Exercise
        </Heading>

        <Table variant="striped" colorScheme="teal" my={5}>
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              {/* <Th isNumeric>multiply by</Th> */}
            </Tr>
          </Thead>
          <Tbody>{renderExerciseList()}</Tbody>
        </Table>
        {/* <Formik
          initialValues={{
            name: "",
            bodyPart: "",
            exerciseWorkId: "",
          }}
          onSubmit={async (values, { setErrors }) => {
            const trExercise = trimVal<typeof values>({ ...values });
            // addSet([...sets, { ...values, id }]);
            // setId(id + 1);
            const err = exerciseValidator(trExercise);

            if (err) {
              setErrors(toErrorMap(err));
            } else {
              // addSet([...sets, values]);
              // console.log("call");
            }
          }}
        >
          {(props) => (
            <Fragment>
              <Table variant="simple">
                <TableCaption placement="top">Name</TableCaption>
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
                  {renderList()}
                  <SetInput isSubmitting={props.isSubmitting} />
                </Tbody>
              </Table>
            </Fragment>
          )}
        </Formik>
       */}
      </Fragment>
    </Layout>
  );
};

// const ExerciseConsumer = Consume(, []);

export default withApollo({ ssr: false })(Exercise);
