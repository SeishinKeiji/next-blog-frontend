/* eslint-disable react/no-children-prop */
import { useColorMode, Avatar, Flex, HStack, Input, InputGroup, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, Button, Portal, Link, InputRightElement, IconButton } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { IoIosPartlySunny, IoIosCloudyNight } from "react-icons/io";
import { useMutation, useQuery } from "@apollo/client";

import { CURRENT_USER } from "lib/GraphQL/Queries";
import { Mutation, Query } from "generated-types";
import NextLink from "next/link";
import { LOGOUT } from "lib/GraphQL/Mutations";

export const Navbar = () => {
  const { data, client } = useQuery<Query>(CURRENT_USER);
  const { toggleColorMode, colorMode } = useColorMode();
  const [logout] = useMutation<Mutation>(LOGOUT);
  const handleToggle = () => {
    toggleColorMode();
  };

  return (
    <Flex as={"nav"} bg={"whiteAlpha.200"} width={"full"} justifyContent={"center"} p={"3"}>
      <HStack w={1250}>
        <HStack spacing={3} w={"md"}>
          <Link href="/" as={NextLink}>
            <Avatar src={"/images/icon.png"} size={"md"} />
          </Link>
          <InputGroup>
            <InputRightElement pointerEvents="none" children={<RiSearchLine />} />
            <Input type="text" placeholder="Search..." />
          </InputGroup>
        </HStack>
        <Spacer />
        <HStack spacing={5}>
          <IconButton onClick={handleToggle} colorScheme="blue" aria-label="Search database" icon={colorMode === "light" ? <IoIosCloudyNight /> : <IoIosPartlySunny />} />
          {data?.loggedInAuthor ? (
            <>
              <NextLink href="/new" passHref legacyBehavior>
                <Button as="a" colorScheme="teal" variant="outline">
                  New Post
                </Button>
              </NextLink>
              <Menu placement="bottom-end">
                <MenuButton>
                  <Avatar src={"/images/profile.jpg"} size={"md"} />
                </MenuButton>
                <Portal>
                  <MenuList>
                    <MenuItem as={NextLink} href={`/${data.loggedInAuthor.username}`}>
                      {data.loggedInAuthor.name}
                      <br />@{data.loggedInAuthor.username}
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem as={NextLink} href="/settings">
                      Setting
                    </MenuItem>
                    <MenuItem as={NextLink} href="/dashboard">
                      Dashboard
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem
                      onClick={() => {
                        logout();
                        client.resetStore();
                      }}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            </>
          ) : (
            <>
              <NextLink href="/login" passHref legacyBehavior>
                <Button as="a" colorScheme="teal" variant="outline">
                  Sign In
                </Button>
              </NextLink>
              <NextLink href="/register" passHref legacyBehavior>
                <Button as="a" colorScheme="teal" variant="solid">
                  Sign Up
                </Button>
              </NextLink>
            </>
          )}
        </HStack>
      </HStack>
    </Flex>
  );
};
