import { Avatar, Button, Flex, HStack, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Link from "next/link";
import { MdLogin } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

export const Navbar = () => {
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
            <Tab>New Post</Tab>
          </TabList>
        </Tabs>
        {/* conditional section */}
        {/* <Button leftIcon={<MdLogin />} colorScheme="teal" variant="solid">
          Sign In
        </Button> */}

        {/* create handler onclick on logout */}
        <Menu placement="bottom-end">
          <MenuButton>
            <Avatar src={"/images/profile.jpg"} size={"md"} />
          </MenuButton>
          <MenuList>
            {/* page for editable user data */}
            <MenuItem>
              <Link href="/profile">Setting</Link>
            </MenuItem>
            {/* show profile user like post, bookmarked, etc... if user role is member and show manager page if user role is admin */}
            <MenuItem>Dashboard</MenuItem>
            <MenuDivider />
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};
