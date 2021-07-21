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
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { Fragment, useState } from "react";
import InputField from "../components/InputField";
import SetInput from "../components/inputs/SetInput";
import Layout from "../components/Layout";
import { trimVal, toErrorMap } from "../constant/actions";
import { userValidator } from "../constant/utils/userValidate";

interface Props {}

const Exercise = (props: Props) => {
  const data = [
    {
      set: 1,
      previous: 1,
      weight: 1,
      reps: 1,
    },
    {
      set: 2,
      previous: 2,
      weight: 2,
      reps: 2,
    },
    {
      set: 3,
      previous: 3,
      weight: 3,
      reps: 3,
    },
  ];

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
            // console.log(values);
            // console.log(trimVal({ ...values }));
            addSet([...sets, { ...values, id }]);
            setId(id + 1);
            const err = userValidator(values);

            if (err) {
              console.log(err);
              setErrors(toErrorMap(err));
              // } else if (res.data?.register.user) {
              //   router.push("/");
            } else {
              addSet([...sets, values]);
              console.log("call");
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
      </Fragment>
    </Layout>
  );
};

export default Exercise;
