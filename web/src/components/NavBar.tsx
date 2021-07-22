import { Flex, Link } from "@chakra-ui/react";
import React, { useEffect } from "react";
import NextLink from "next/link";
import configs from "../constant/configs";
import { LoginContextType } from "../constant/Types/Context";
import { Consume } from "../Context/Consumer";
import { LoginContext } from "../Context";
import { getLoginCookie } from "../constant/core";
import { useMeQuery } from "../generated/graphql";

interface Props {
  LoginData: LoginContextType;
  // ShowPopupData: PopUpContextType;
}

const NavBar = ({ LoginData }: Props) => {
  const { data, loading } = useMeQuery();

  useEffect(() => {
    LoginData.setUserObj(data);
  }, [data]);

  return (
    <Flex mb={2} justifyContent="space-between">
      <Flex>
        <NextLink href={configs.enumUrl.profile.link}>
          <Link ml={2} mr={2}>
            {configs.enumUrl.profile.title}
          </Link>
        </NextLink>

        <NextLink href={configs.enumUrl.history.link}>
          <Link ml={2} mr={2}>
            {configs.enumUrl.history.title}
          </Link>
        </NextLink>

        <NextLink href={configs.enumUrl.workout.link}>
          <Link ml={2} mr={2}>
            {configs.enumUrl.workout.title}
          </Link>
        </NextLink>

        <NextLink href={configs.enumUrl.exercises.link}>
          <Link ml={2} mr={2}>
            {configs.enumUrl.exercises.title}
          </Link>
        </NextLink>
      </Flex>
      <Flex>
        <NextLink href={configs.enumUrl.login.link}>
          <Link ml={2} mr={2}>
            {configs.enumUrl.login.title}
          </Link>
        </NextLink>

        <NextLink href={configs.enumUrl.register.link}>
          <Link ml={2} mr={2}>
            {configs.enumUrl.register.title}
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default Consume(NavBar, [LoginContext]);
