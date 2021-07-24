import { CloseIcon } from "@chakra-ui/icons";
import {
  Tr,
  Td,
  IconButton,
  Table,
  TableCaption,
  Thead,
  Th,
  Tbody,
} from "@chakra-ui/react";
import { Formik } from "formik";
import React, { Fragment, useState } from "react";
import { trimVal, toErrorMap } from "../../constant/actions";
import { exerciseValidator } from "../../constant/utils/exerciseValidator";
import SetInput from "../inputs/SetInput";

interface Props {}

const NewSet = (props: Props) => {
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
    <Fragment>
      <Formik
        initialValues={
          {
            //   name: "",
            //   bodyPart: "",
            //   exerciseWorkId: "",
          }
        }
        onSubmit={async (values, { setErrors }) => {
          const trExercise = trimVal<typeof values>({ ...values });
          // addSet([...sets, { ...values, id }]);
          // setId(id + 1);
          const err = exerciseValidator(trExercise);

          if (err) {
            setErrors(toErrorMap(err));
          } else {
            addSet([...sets, values]);
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
    </Fragment>
  );
};

export default NewSet;
