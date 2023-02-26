/* eslint-disable react/no-children-prop */
import { Avatar, Flex, HStack, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, Tab, TabList, Tabs, Button, Portal } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { MdLogin } from "react-icons/md";
import { useQuery } from "@apollo/client";

import { CURRENT_USER } from "lib/GraphQL/Queries";
import { Query } from "generated-types";
import NextLink from "next/link";

export const Navbar = () => {
  const { data } = useQuery<Query>(CURRENT_USER);

  return (
    <Flex as={"nav"} bg={"whiteAlpha.200"} width={"full"} p={"3"}>
      <HStack spacing={3}>
        <Avatar src={"/images/icon.png"} size={"lg"} />
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<RiSearchLine />} />
          <Input type="text" placeholder="Search..." />
        </InputGroup>
      </HStack>
      <Spacer />
      <HStack spacing={5}>
        <Tabs>
          <TabList>
            <Tab>Home</Tab>
            {data?.loggedInAuthor && <Tab>New Post</Tab>}
          </TabList>
        </Tabs>
        {data?.loggedInAuthor ? (
          <Menu placement="bottom-end">
            <MenuButton>
              <Avatar src={"/images/profile.jpg"} size={"md"} />
            </MenuButton>
            <Portal>
              <MenuList>
                {/* page for editable user data */}
                <MenuItem as={NextLink} href="/setting">
                  Setting
                </MenuItem>
                {/* show profile user like post, bookmarked, etc... if user role is member and show manager page if user role is admin */}
                <MenuItem>Dashboard</MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => (document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 GMT")}>Logout</MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        ) : (
          <NextLink href="/login" passHref legacyBehavior>
            <Button as="a" leftIcon={<MdLogin />} colorScheme="teal" variant="solid">
              Sign In
            </Button>
          </NextLink>
          // <p>hello</p>
        )}
      </HStack>
    </Flex>
  );
};
