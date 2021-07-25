import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";
import React, { Fragment, useEffect } from "react";
import configs from "../constant/configs";
import { LoginContextType } from "../constant/Types/Context";
import { LoginContext } from "../Context";
import { Consume } from "../Context/Consumer";
import { useLogOutMutation, useMeQuery } from "../generated/graphql";

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
    <Flex mb={2} justifyContent="space-between" alignItems="center">
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
            <Menu>
              <MenuButton
                variant="unstyled"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                {LoginData.data?.me?.username}
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => {
                    router.push(configs.enumUrl.profile.link);
                  }}
                >
                  {LoginData.data?.me?.username}
                </MenuItem>
                <MenuItem
                  onClick={async () => {
                    await logout();
                    LoginData.delUserObj();
                    router.reload();
                  }}
                >
                  {configs.enumUrl.logout.title}
                </MenuItem>
              </MenuList>
            </Menu>
          </Fragment>
        ) : (
          <Fragment>
            <Menu>
              <MenuButton
                variant="unstyled"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Login
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => {
                    router.push(configs.enumUrl.login.link);
                  }}
                >
                  {configs.enumUrl.login.title}
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    router.push(configs.enumUrl.register.link);
                  }}
                >
                  {configs.enumUrl.register.title}
                </MenuItem>
              </MenuList>
            </Menu>
            {/* <NextLink href={configs.enumUrl.login.link}>
              <Link ml={2} mr={2}>
                {configs.enumUrl.login.title}
              </Link>
            </NextLink>

            <NextLink href={configs.enumUrl.register.link}>
              <Link ml={2} mr={2}>
                {configs.enumUrl.register.title}
              </Link>
            </NextLink> */}
          </Fragment>
        )}
      </Flex>
    </Flex>
  );
};

export default Consume(NavBar, [LoginContext]);
