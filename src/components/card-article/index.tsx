import { CardHeader, Flex, Avatar, Heading, IconButton, CardBody, CardFooter, Button, Box, Card, Text, Img, HStack, TagLeftIcon, TagLabel, Tag, VStack, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiChat, BiLike, BiBookmark } from "react-icons/bi";
import { HiHashtag } from "react-icons/hi";

export const TopCardArticle = () => {
  return (
    <VStack w="40.5rem" alignItems={"stretch"} bg="blackAlpha.500" roundedBottom={"md"}>
      <Img src="/images/banner.webp" alt="Yagami Light" h="17rem" roundedTop={"md"} />
      <VStack alignItems={"start"} gap={5} p="1.25rem">
        <HStack>
          <Avatar name="Segun Adebayo" src="https://www.dropbox.com/s/dl/nd8z3hxuo3ahauk/segun_adebayo.jpg" />
          <VStack alignItems={"start"} lineHeight={0.8}>
            <Text fontSize={"sm"}>Segun Adebayo</Text>
            <Text fontSize={"xs"} opacity={0.5}>
              Jan 1 (3 days ago)
            </Text>
          </VStack>
        </HStack>
        <VStack alignItems={"start"} w={"35rem"} alignSelf="end">
          <Heading fontSize={{ sm: "1.25rem", md: "1.875rem" }}>Loremm ipsum Dolor Siet Amet!</Heading>
          <HStack spacing={2} alignItems={"center"}>
            <Tag size={"sm"} variant="subtle" colorScheme="cyan">
              <TagLeftIcon boxSize="12px" as={HiHashtag} />
              <TagLabel>NodeJs</TagLabel>
            </Tag>
            <Tag size={"sm"} variant="subtle" colorScheme="cyan">
              <TagLeftIcon boxSize="12px" as={HiHashtag} />
              <TagLabel>Typescript</TagLabel>
            </Tag>
            <Tag size={"sm"} variant="subtle" colorScheme="cyan">
              <TagLeftIcon boxSize="12px" as={HiHashtag} />
              <TagLabel>Backend</TagLabel>
            </Tag>
          </HStack>
          <HStack justifyContent={"space-between"} w="full">
            <Box>
              {/* hide like and comment sentence in mobile mode for responsive purpose :D */}
              <Button variant="ghost" leftIcon={<BiLike />} fontSize="sm">
                5 Like
              </Button>
              <Button variant="ghost" leftIcon={<BiChat />} fontSize="sm">
                10 Comment
              </Button>
            </Box>
            <HStack spacing={3}>
              <Text as={"small"}>3 min read</Text>
              <IconButton variant="ghost" aria-label="bookmark" icon={<BiBookmark />} />
            </HStack>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export const CardArticle = () => {
  // only show total statistic but not allow user to mutate data from statistic, only mutate on detail post. except for bookmark
  return (
    <VStack w="40.5rem" bg="blackAlpha.500" rounded={"md"} alignItems={"start"} gap={5} p="1.25rem">
      <HStack>
        <Avatar name="Segun Adebayo" src="https://www.dropbox.com/s/dl/nd8z3hxuo3ahauk/segun_adebayo.jpg" />
        <VStack alignItems={"start"} lineHeight={0.8}>
          <Text fontSize={"sm"}>Segun Adebayo</Text>
          <Text fontSize={"xs"} opacity={0.5}>
            Jan 1 (3 days ago)
          </Text>
        </VStack>
      </HStack>
      <VStack alignItems={"start"} w={"35rem"} alignSelf="end">
        <Heading fontSize={{ sm: "1.25rem", md: "1.875rem" }}>Loremm ipsum Dolor Siet Amet!</Heading>
        <HStack spacing={2} alignItems={"center"}>
          <Tag size={"sm"} variant="subtle" colorScheme="cyan">
            <TagLeftIcon boxSize="12px" as={HiHashtag} />
            <TagLabel>NodeJs</TagLabel>
          </Tag>
          <Tag size={"sm"} variant="subtle" colorScheme="cyan">
            <TagLeftIcon boxSize="12px" as={HiHashtag} />
            <TagLabel>Typescript</TagLabel>
          </Tag>
          <Tag size={"sm"} variant="subtle" colorScheme="cyan">
            <TagLeftIcon boxSize="12px" as={HiHashtag} />
            <TagLabel>Backend</TagLabel>
          </Tag>
        </HStack>
        <HStack justifyContent={"space-between"} w="full">
          <Box>
            {/* hide like and comment sentence in mobile mode for responsive purpose :D */}
            <Button variant="ghost" leftIcon={<BiLike />} fontSize="sm">
              5 Like
            </Button>
            <Button variant="ghost" leftIcon={<BiChat />} fontSize="sm">
              10 Comment
            </Button>
          </Box>
          <HStack spacing={3}>
            <Text as={"small"}>3 min read</Text>
            <IconButton variant="ghost" aria-label="bookmark" icon={<BiBookmark />} />
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
};
