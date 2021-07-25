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
  const [setNoId, setSetNoId] = useState(1);
  const [createSet] = useCreateSetsMutation();
  const [deleteSet] = useDeleteSetMutation();

  const { data: sets } = useExerciseSetsQuery({
    variables: { id: exerciseId, limit: 50 },
  });

  const removeSet = (id) => {
    deleteSet({
      variables: { id },
      update: (caches) => {
        caches.evict({ fieldName: "exerciseSet" });
      },
    });
  };

  const addSet = async (trSet) => {
    setSetNoId(setNoId + 1);
    await createSet({
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
  };

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
        initialValues={{
          exerciseId,
          weight: "",
          reps: "",
          setType: "",
        }}
        onSubmit={async (values, { setErrors }) => {
          let trSet = trimVal({ ...values, setNo: setNoId });
          const err = setValidator(trSet);
          if (err) {
            setErrors(toErrorMap(err));
          } else {
            addSet(trSet);
          }
        }}
      >
        {(props) => (
          <Fragment>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Set</Th>
                  <Th isNumeric>Weight (KG)</Th>
                  <Th isNumeric>Reps</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {renderList()}
                <SetInput
                  setNoId={setNoId}
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
