import { CardHeader, Flex, Avatar, Heading, IconButton, CardBody, CardFooter, Button, Box, Card, Text, Image, HStack, TagLeftIcon, TagLabel, Tag, VStack } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiChat, BiLike, BiBookmark } from "react-icons/bi";
import { HiHashtag } from "react-icons/hi";

export const TopCardArticle = () => {
  return (
    <Card maxW="md">
      <CardHeader>
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

            <Box>
              <Heading size="sm">Segun Adebayo</Heading>
              <Text as={"sup"}>Jan 1 (3 days ago)</Text>
            </Box>
          </Flex>
          {/* Only show if the logged-in user owns the post */}
          <IconButton variant="ghost" colorScheme="gray" aria-label="See menu" icon={<BsThreeDotsVertical />} />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text as={"h1"} fontSize={"xl"} fontWeight={"bold"}>
          Some Title that awesome!
        </Text>
        <VStack gap={3} alignItems={"start"}>
          <Text>With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.</Text>
          <HStack spacing={2}>
            <Tag size={"sm"} variant="subtle" colorScheme="cyan">
              <TagLeftIcon boxSize="12px" as={HiHashtag} />
              <TagLabel>Rust</TagLabel>
            </Tag>
            <Tag size={"sm"} variant="subtle" colorScheme="cyan">
              <TagLeftIcon boxSize="12px" as={HiHashtag} />
              <TagLabel>Microservice</TagLabel>
            </Tag>
            <Tag size={"sm"} variant="subtle" colorScheme="cyan">
              <TagLeftIcon boxSize="12px" as={HiHashtag} />
              <TagLabel>Docker</TagLabel>
            </Tag>
          </HStack>
        </VStack>
      </CardBody>
      <Image objectFit="cover" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Chakra UI" />

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        {/* hide like and comment sentence in mobile mode for responsive purpose :D */}
        <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
          5 Like
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
          10 Comment
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<BiBookmark />}>
          <Text as={"small"}>8 min read</Text>
        </Button>
      </CardFooter>
    </Card>
  );
};

export const CardArticle = () => {
  // only show total statistic but not allow user to mutate data from statistic, only mutate on detail post. except for bookmark
  return (
    <Card maxW={"md"}>
      <CardHeader>
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

            <Box>
              <Heading size="sm">Segun Adebayo</Heading>
              <Text as={"sup"}>Jan 1 (3 days ago)</Text>
            </Box>
          </Flex>
          {/* Only show if the logged-in user owns the post */}
          <IconButton variant="ghost" colorScheme="gray" aria-label="See menu" icon={<BsThreeDotsVertical />} />
        </Flex>
      </CardHeader>
      <CardBody display={"flex"} flexDirection={"column"} gap={5}>
        <Text as={"h1"} fontSize={"xl"} fontWeight={"bold"}>
          Some Title that awesome!
        </Text>
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
      </CardBody>
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        {/* hide like and comment sentence in mobile mode for responsive purpose :D */}
        <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
          5 Like
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
          10 Comment
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<BiBookmark />}>
          <Text as={"small"}>8 min read</Text>
        </Button>
      </CardFooter>
    </Card>
  );
};
