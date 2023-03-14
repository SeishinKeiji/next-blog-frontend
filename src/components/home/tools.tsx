import { Box, Text, VStack, Heading, Center, HStack, Img, Button } from "@chakra-ui/react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoLinkExternal } from "react-icons/go";

const Tools = () => {
  return (
    <VStack alignItems={"stretch"} flex={1}>
      <Heading fontSize={"3xl"} fontWeight={"medium"}>
        Tools
      </Heading>
      <Text textAlign={"start"}>I&apos;ve worked with a variety of tools and frameworks like:</Text>
      <Box h="25rem" w={{ base: "350px", md: "40rem" }}>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 4,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          grabCursor={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          loop
        >
          <SwiperSlide>
            <Center my={3}>
              <VStack h={"20rem"} w={"17rem"} rounded={"3xl"} shadow={"md"} alignItems={"stretch"} justifyContent={"space-around"} spacing={0}>
                <HStack mx="auto" py="0.625rem" px="0.875rem">
                  <Img w="64px" src="/icons/techNtools/git.svg" alt="Git" />
                </HStack>
                <VStack alignItems={"start"} py="0.625rem" px="0.875rem" minH="10.875rem">
                  <Heading fontSize={"lg"}>Git</Heading>
                  <Text textAlign={"start"} fontSize={"sm"} flex={1}>
                    Version control system
                  </Text>
                  <Button alignSelf={"center"} rightIcon={<GoLinkExternal />} colorScheme="blue" variant="outline" size="sm">
                    View More
                  </Button>
                </VStack>
              </VStack>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <Center my={3}>
              <VStack h={"20rem"} w={"17rem"} rounded={"3xl"} shadow={"md"} alignItems={"stretch"} justifyContent={"space-around"} spacing={0}>
                <HStack mx="auto" py="0.625rem" px="0.875rem">
                  <Img w="64px" src="/icons/techNtools/vscode.svg" alt="Visual Studio Code" />
                </HStack>
                <VStack alignItems={"start"} py="0.625rem" px="0.875rem" minH="10.875rem">
                  <Heading fontSize={"lg"}>Visual Studio Code</Heading>
                  <Text textAlign={"start"} fontSize={"sm"} flex={1}>
                    Awesome code editor!
                  </Text>
                  <Button alignSelf={"center"} rightIcon={<GoLinkExternal />} colorScheme="blue" variant="outline" size="sm">
                    View More
                  </Button>
                </VStack>
              </VStack>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <Center my={3}>
              <VStack h={"20rem"} w={"17rem"} rounded={"3xl"} shadow={"md"} alignItems={"stretch"} justifyContent={"space-around"} spacing={0}>
                <HStack mx="auto" py="0.625rem" px="0.875rem">
                  <Img w="64px" src="/icons/techNtools/nodejs.svg" alt="NodeJs" />
                </HStack>
                <VStack alignItems={"start"} py="0.625rem" px="0.875rem" minH="10.875rem">
                  <Heading fontSize={"lg"}>NodeJs</Heading>
                  <Text textAlign={"start"} fontSize={"sm"} flex={1}>
                    Uwoghh Javascript Runtime
                  </Text>
                  <Button alignSelf={"center"} rightIcon={<GoLinkExternal />} colorScheme="blue" variant="outline" size="sm">
                    View More
                  </Button>
                </VStack>
              </VStack>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <Center my={3}>
              <VStack h={"20rem"} w={"17rem"} rounded={"3xl"} shadow={"md"} alignItems={"stretch"} justifyContent={"space-around"} spacing={0}>
                <HStack mx="auto" py="0.625rem" px="0.875rem">
                  <Img w="64px" src="/icons/techNtools/mongodb.svg" alt="MongoDB" />
                </HStack>
                <VStack alignItems={"start"} py="0.625rem" px="0.875rem" minH="10.875rem">
                  <Heading fontSize={"lg"}>MongoDB</Heading>
                  <Text textAlign={"start"} fontSize={"sm"} flex={1}>
                    Database Management System based on Document (No-SQL)
                  </Text>
                  <Button alignSelf={"center"} rightIcon={<GoLinkExternal />} colorScheme="blue" variant="outline" size="sm">
                    View More
                  </Button>
                </VStack>
              </VStack>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <Center my={3}>
              <VStack h={"20rem"} w={"17rem"} rounded={"3xl"} shadow={"md"} alignItems={"stretch"} justifyContent={"space-around"} spacing={0}>
                <HStack mx="auto" py="0.625rem" px="0.875rem">
                  <Img w="64px" src="/icons/techNtools/graphql.svg" alt="GraphQL" />
                </HStack>
                <VStack alignItems={"start"} py="0.625rem" px="0.875rem" minH="10.875rem">
                  <Heading fontSize={"lg"}>GraphQL</Heading>
                  <Text textAlign={"start"} fontSize={"sm"} flex={1}>
                    An Efficient API Query Language
                  </Text>
                  <Button alignSelf={"center"} rightIcon={<GoLinkExternal />} colorScheme="blue" variant="outline" size="sm">
                    View More
                  </Button>
                </VStack>
              </VStack>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <Center my={3}>
              <VStack h={"20rem"} w={"17rem"} rounded={"3xl"} shadow={"md"} alignItems={"stretch"} justifyContent={"space-around"} spacing={0}>
                <HStack mx="auto" py="0.625rem" px="0.875rem">
                  <Img w="64px" src="/icons/techNtools/postgresql.svg" alt="PostgresQL" />
                </HStack>
                <VStack alignItems={"start"} py="0.625rem" px="0.875rem" minH="10.875rem">
                  <Heading fontSize={"lg"}>PostgresQL</Heading>
                  <Text textAlign={"start"} fontSize={"sm"} flex={1}>
                    Database Management System based on SQL
                  </Text>
                  <Button alignSelf={"center"} rightIcon={<GoLinkExternal />} colorScheme="blue" variant="outline" size="sm">
                    View More
                  </Button>
                </VStack>
              </VStack>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <Center my={3}>
              <VStack h={"20rem"} w={"17rem"} rounded={"3xl"} shadow={"md"} alignItems={"stretch"} justifyContent={"space-around"} spacing={0}>
                <HStack mx="auto" py="0.625rem" px="0.875rem">
                  <Img w="64px" src="/icons/techNtools/laravel.svg" alt="Laravel" />
                </HStack>
                <VStack alignItems={"start"} py="0.625rem" px="0.875rem" minH="10.875rem">
                  <Heading fontSize={"lg"}>Laravel</Heading>
                  <Text textAlign={"start"} fontSize={"sm"} flex={1}>
                    Web framework based on PHP.
                  </Text>
                  <Button alignSelf={"center"} rightIcon={<GoLinkExternal />} colorScheme="blue" variant="outline" size="sm">
                    View More
                  </Button>
                </VStack>
              </VStack>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <Center my={3}>
              <VStack h={"20rem"} w={"17rem"} rounded={"3xl"} shadow={"md"} alignItems={"stretch"} justifyContent={"space-around"} spacing={0}>
                <HStack mx="auto" py="0.625rem" px="0.875rem">
                  <Img w="64px" src="/icons/techNtools/nestjs.svg" alt="NestJs" />
                </HStack>
                <VStack alignItems={"start"} py="0.625rem" px="0.875rem" minH="10.875rem">
                  <Heading fontSize={"lg"}>NestJs</Heading>
                  <Text textAlign={"start"} fontSize={"sm"} flex={1}>
                    Backend web javascript framework.
                  </Text>
                  <Button alignSelf={"center"} rightIcon={<GoLinkExternal />} colorScheme="blue" variant="outline" size="sm">
                    View More
                  </Button>
                </VStack>
              </VStack>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <Center my={3}>
              <VStack h={"20rem"} w={"17rem"} rounded={"3xl"} shadow={"md"} alignItems={"stretch"} justifyContent={"space-around"} spacing={0}>
                <HStack mx="auto" py="0.625rem" px="0.875rem">
                  <Img w="64px" src="/icons/techNtools/nextjs.svg" alt="NextJs" />
                </HStack>
                <VStack alignItems={"start"} py="0.625rem" px="0.875rem" minH="10.875rem">
                  <Heading fontSize={"lg"}>NextJs</Heading>
                  <Text textAlign={"start"} fontSize={"sm"} flex={1}>
                    Frontend web javascript framework.
                  </Text>
                  <Button alignSelf={"center"} rightIcon={<GoLinkExternal />} colorScheme="blue" variant="outline" size="sm">
                    View More
                  </Button>
                </VStack>
              </VStack>
            </Center>
          </SwiperSlide>
        </Swiper>
      </Box>
    </VStack>
  );
};

export default Tools;
