import { VStack, Text, Heading, Box } from "@chakra-ui/react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Projects = () => {
  return (
    <VStack alignItems={"stretch"}>
      <Heading fontSize={"3xl"} fontWeight={"medium"}>
        Projects
      </Heading>
      <Text fontWeight={"medium"}>Currently learning about web tech stack. Deep dive in SERN stack, SQL - Express - React - Node.</Text>
      <Box h="sm">
        <Swiper pagination={{ dynamicBullets: true }} modules={[Pagination]} loop autoplay>
          <SwiperSlide>Shinigami REST API - ExpressJs</SwiperSlide>
          <SwiperSlide>Bot Whatsapp - Baileys</SwiperSlide>
          <SwiperSlide>Youtube Downloader - Typescript</SwiperSlide>
          <SwiperSlide>Anime List - Laravel & CI 4</SwiperSlide>
          <SwiperSlide>Absensi Siswa - Laravel</SwiperSlide>
          <SwiperSlide>Self Blog - NextJs & NestJs</SwiperSlide>
          <SwiperSlide>Fasock ChatApp - Fastify & NextJs</SwiperSlide>
          <SwiperSlide>Contribute at opensource project | bilibili downloader - with hansputera</SwiperSlide>
          <SwiperSlide>Contribute at opensource project | Bot framework - with hansputera</SwiperSlide>
        </Swiper>
      </Box>
    </VStack>
  );
};

export default Projects;
