/* eslint-disable react/no-children-prop */
import { useColorMode, Avatar, HStack, Input, InputGroup, Menu, MenuButton, MenuItem, MenuList, Link, InputRightElement, IconButton, Box, useDisclosure, Flex, Stack, useColorModeValue, MenuGroup, MenuDivider } from "@chakra-ui/react";
import { useMutation, useQuery } from "@apollo/client";
import NextLink from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import { MdDashboard, MdLogout } from "react-icons/md";

import { CURRENT_USER } from "lib/GraphQL/Queries";
import { Mutation, Query } from "generated-types";
import { LOGOUT } from "lib/GraphQL/Mutations";
import { NavLinkProps } from "lib/constants/types";

export const Navbar = () => {
  const { data, client } = useQuery<Query>(CURRENT_USER);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode, colorMode } = useColorMode();
  const [logout] = useMutation<Mutation>(LOGOUT);
  const handleToggle = () => {
    toggleColorMode();
  };

  return (
    <Box as="nav" px={4} boxShadow="lg">
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW={1400} mx="auto">
        <IconButton size="md" icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />} aria-label="Open Menu" display={["inherit", "inherit", "none"]} onClick={isOpen ? onClose : onOpen} />
        <HStack spacing={8} alignItems="center">
          {data?.loggedInAuthor ? (
            <Menu>
              <MenuButton aria-label="Profile">
                <Avatar size="md" showBorder={true} borderColor="blue.400" rounded="full" src="/images/profile.jpg" />
              </MenuButton>
              <MenuList>
                <MenuGroup title="Panel">
                  <MenuItem icon={<MdDashboard />} as={NextLink} href="/dashboard">
                    Dashboard
                  </MenuItem>
                  <MenuItem icon={<AiOutlinePlus />} as={NextLink} href="/new">
                    New Post
                  </MenuItem>
                  <MenuItem
                    icon={<MdLogout />}
                    onClick={() => {
                      logout();
                      client.resetStore();
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Other">
                  <MenuItem as={NextLink} href="/">
                    Home
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          ) : (
            <NextLink href="/">
              <Avatar size="md" showBorder={true} borderColor="blue.400" rounded="full" src="/images/profile.jpg" />
            </NextLink>
          )}

          <HStack spacing={1} display={{ base: "none", md: "flex" }} alignItems="center">
            <NavLink name="Diary" path="/blog/diary" onClose={onClose} />
            <NavLink name="Programming" path="/blog/programming" onClose={onClose} />
            <NavLink name="Life Hack" path="/blog/lifehack" onClose={onClose} />
          </HStack>
        </HStack>

        <HStack>
          <InputGroup display={["none", "inherit", "inherit"]}>
            <InputRightElement pointerEvents="none" children={<RiSearchLine />} />
            <Input type="text" placeholder="Search..." />
          </InputGroup>
          <IconButton onClick={handleToggle} colorScheme="blue" aria-label="Color Switcher" icon={colorMode === "light" ? <FiMoon /> : <FiSun />} />
        </HStack>
      </Flex>

      {/* Mobile Screen Links */}
      {isOpen ? (
        <Box pb={4} display={["inherit", "inherit", "none"]}>
          <Stack spacing={2}>
            <NavLink name="Diary" path="/blog/diary" onClose={onClose} />
            <NavLink name="Programming" path="/blog/programming" onClose={onClose} />
            <NavLink name="Life Hack" path="/blog/lifehack" onClose={onClose} />
            <InputGroup>
              <InputRightElement pointerEvents="none" children={<RiSearchLine />} />
              <Input type="text" placeholder="Search..." />
            </InputGroup>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

const NavLink = ({ name, path, onClose }: NavLinkProps) => {
  const link = {
    bg: useColorModeValue("gray.200", "gray.700"),
    color: useColorModeValue("blue.500", "blue.200"),
  };

  return (
    <Link
      as={NextLink}
      href={path}
      px={3}
      py={1}
      lineHeight="inherit"
      rounded="md"
      _hover={{
        textDecoration: "none",
        bg: link.bg,
        color: link.color,
      }}
      onClick={() => onClose()}
    >
      {name}
    </Link>
  );
};
