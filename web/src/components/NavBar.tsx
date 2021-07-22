import { Button, Flex, Link } from "@chakra-ui/react";
import React, { Fragment, useEffect } from "react";
import NextLink from "next/link";
import configs from "../constant/configs";
import { LoginContextType } from "../constant/Types/Context";
import { Consume } from "../Context/Consumer";
import { LoginContext } from "../Context";
import { getLoginCookie } from "../constant/core";
import {
  useLoginMutation,
  useLogOutMutation,
  useMeQuery,
} from "../generated/graphql";
import { useRouter } from "next/dist/client/router";

interface Props {
  LoginData: LoginContextType;
  // ShowPopupData: PopUpContextType;
}

const NavBar = ({ LoginData }: Props) => {
  const router = useRouter();
  const [logout] = useLogOutMutation();
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
        {LoginData.data?.me ? (
          <Fragment>
            <NextLink href={configs.enumUrl.profile.link}>
              <Link ml={2} mr={2}>
                {LoginData.data?.me?.username}
              </Link>
            </NextLink>

            <Link
              ml={2}
              mr={2}
              onClick={async () => {
                await logout();
                LoginData.delUserObj();
                router.reload();
              }}
            >
              {configs.enumUrl.logout.title}
            </Link>
          </Fragment>
        ) : (
          <Fragment>
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
          </Fragment>
        )}
      </Flex>
    </Flex>
  );
};

export default Consume(NavBar, [LoginContext]);
