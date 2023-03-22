import { Text, VStack, Box, Avatar, Icon, Center, useColorModeValue, Heading } from "@chakra-ui/react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteRight } from "react-icons/fa";

interface ContributorAttributes {
  username: string;
  as: string;
  content: string;
  image: string;
}

const contributors: ContributorAttributes[] = [
  {
    username: "Parents",
    as: "Best Supporter",
    image: "/images/contributor.jpeg",
    content: `Terimakasih kepada orang tua saya yang selalu mendukung dan membesarkan saya serta bersabar dengan segala kenakalan yang telah saya lakukan :v`,
  },
  {
    username: "Arya Wahyu Pratama",
    as: "Best Rival",
    image: "https://avatars.githubusercontent.com/u/75900371?v=4",
    content: `Sishoo... Terimakasih telah sharing-sharing dan sangat menyenangkan bersaing dengan lu, moga kita bisa berbincang-bincang kembali seperti dulu :"v`,
  },
  {
    username: "Hanif Dwy Putera",
    as: "Best Tomodachi",
    image: "https://avatars.githubusercontent.com/u/47862061?v=4",
    content: `Arigatou hanif-sama, telah bersedia menjadi sepuh saya :v`,
  },
  {
    username: "Brother",
    as: "My Brother",
    image: "/images/contributor.jpeg",
    content: `Thanks brother for the space of room and the computer and laptop, it's very useful for me. The best lah :v`,
  },
  {
    username: "Sister",
    as: "My Sister",
    image: "/images/contributor.jpeg",
    content: `Terimakasih atas bantuan dan dukungan yang diberikan, tak terhitung jumlahnya. hontoni arigatouu`,
  },
];

const ThanksTo = () => {
  return (
    <Box p={{ base: 5, md: 10 }}>
      <Heading fontSize={"3xl"} fontWeight={"medium"} textAlign="center" p={5}>
        Big Thanks To
      </Heading>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 4,
          },
          768: {
            slidesPerView: 3,
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
        {contributors.map((contributor, index) => (
          <SwiperSlide key={index}>
            <Center my={3}>
              <VStack
                spacing={3}
                p={{ base: 4, sm: 8 }}
                bg={useColorModeValue("white", "blackAlpha.600")}
                borderTop="2px solid"
                borderColor="green.400"
                borderBottomLeftRadius="lg"
                borderBottomRightRadius="lg"
                maxW="25rem"
                margin="0 auto"
                boxShadow="lg"
              >
                <Icon as={FaQuoteRight} w={8} h={8} color="green.400" />
                <Text p={5} color="gray.500">
                  {contributor.content}
                </Text>
                <VStack alignItems="center">
                  <Avatar name="avatar" src={contributor.image} size="lg" />
                  <Box textAlign="center">
                    <Text fontWeight="bold" fontSize="lg">
                      {contributor.username}
                    </Text>
                    <Text fontSize="md" color="gray.500">
                      {contributor.as}
                    </Text>
                  </Box>
                </VStack>
              </VStack>
            </Center>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ThanksTo;
