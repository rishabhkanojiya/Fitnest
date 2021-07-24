import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import React, { Fragment } from "react";

interface Props {}

const TableSkel = (props: Props) => {
  return (
    <Fragment>
      <SimpleGrid columns={3}>
        <Skeleton height="20px" m={2}>
          <div />
        </Skeleton>
        <Skeleton height="20px" m={2}>
          <div />
        </Skeleton>
        <Skeleton height="20px" m={2}>
          <div />
        </Skeleton>
      </SimpleGrid>
      <SimpleGrid columns={3}>
        <Skeleton height="20px" m={2}>
          <div />
        </Skeleton>
        <Skeleton height="20px" m={2}>
          <div />
        </Skeleton>
        <Skeleton height="20px" m={2}>
          <div />
        </Skeleton>
      </SimpleGrid>
      <SimpleGrid columns={3}>
        <Skeleton height="20px" m={2}>
          <div />
        </Skeleton>
        <Skeleton height="20px" m={2}>
          <div />
        </Skeleton>
        <Skeleton height="20px" m={2}>
          <div />
        </Skeleton>
      </SimpleGrid>
      <SimpleGrid columns={3}>
        <Skeleton height="20px" m={2}>
          <div />
        </Skeleton>
        <Skeleton height="20px" m={2}>
          <div />
        </Skeleton>
        <Skeleton height="20px" m={2}>
          <div />
        </Skeleton>
      </SimpleGrid>
    </Fragment>
  );
};

export default TableSkel;
