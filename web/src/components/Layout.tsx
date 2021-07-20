import { Box } from "@chakra-ui/react";
import React, { Children } from "react";
import NavBar from "./NavBar";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <Box maxW="800px" w="100%" m="auto" mt={4}>
      <NavBar />
      {children}
    </Box>
  );
};

export default Layout;
