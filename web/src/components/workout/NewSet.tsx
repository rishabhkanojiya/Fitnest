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
import { setValidator } from "../../constant/utils/setValidator";
import {
  useCreateSetsMutation,
  useDeleteSetMutation,
  useExerciseSetsQuery,
} from "../../generated/graphql";
import SetInput from "../inputs/SetInput";

interface Props {
  exerciseId: number;
}

const NewSet = ({ exerciseId }: Props) => {
  // const [sets, setSets] = useState([]);
  const [id, setId] = useState(1);
  // console.log(sets);
  const [createSet] = useCreateSetsMutation();
  const [deleteSet] = useDeleteSetMutation();

  const { data: sets } = useExerciseSetsQuery({
    variables: { id: exerciseId, limit: 50 },
  });

  // const addSet = (val) => {
  //   setSets(val);
  // };

  // const removeSet = (id) => {
  //   console.log(id);

  //   // const newSet = sets.filter((a, ind) => a.id !== index);
  //   // setSets(newSet);
  // };

  const renderList = () => {
    return sets?.exerciseSet.map((a) => {
      return (
        <Tr key={a.id}>
          <Td>{a.setNo}</Td>
          <Td isNumeric>{a.weight}</Td>
          <Td isNumeric>{a.reps}</Td>
          <Td>
            <IconButton
              variant="ghost"
              aria-label="Call Segun"
              icon={<CloseIcon />}
              my={-2}
              onClick={() => {
                deleteSet({
                  variables: { id: a.id },
                  update: (caches) => {
                    caches.evict({ fieldName: "exerciseSet" });
                  },
                });
              }}
            />
          </Td>
        </Tr>
      );
    });
  };

  return (
    <Fragment>
      <Formik
        initialValues={{
          exerciseId,
          setNo: "",
          weight: "",
          reps: "",
          setType: "",
        }}
        onSubmit={async (values, { setErrors }) => {
          let trSet = trimVal({ ...values });
          const err = setValidator(trSet);
          console.log(err);
          if (err) {
            setErrors(toErrorMap(err));
          } else {
            const set = await createSet({
              variables: {
                input: {
                  exerciseId,
                  setNo: parseInt(trSet.setNo),
                  reps: parseInt(trSet.reps),
                  weight: parseInt(trSet.weight),
                  setType: trSet.setType,
                },
              },

              update: (caches) => {
                caches.evict({ fieldName: "exerciseSet" });
              },
            });
            // addSet([...sets, values]);
          }
        }}
      >
        {(props) => (
          <Fragment>
            <Table variant="simple">
              {/* <TableCaption placement="top">Name</TableCaption> */}
              <Thead>
                <Tr>
                  <Th>Set</Th>
                  <Th isNumeric>Weight</Th>
                  <Th isNumeric>Reps</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {renderList()}
                <SetInput
                  isSubmitting={props.isSubmitting}
                  exerciseId={exerciseId}
                />
              </Tbody>
            </Table>
          </Fragment>
        )}
      </Formik>
    </Fragment>
  );
};

export default NewSet;
