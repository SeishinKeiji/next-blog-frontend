import { Box, VStack } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/pagination";

import Banner from "./banner";
import About from "./about";
import Projects from "./projects";
import Experience from "./experience";
import ThanksTo from "./thanksto";
import Milestones from "./timeline";

const MainHome = () => {
  return (
    <Box px={4}>
      <VStack maxW={1400} spacing={10} mx="auto" alignItems={"stretch"}>
        <Banner />
        <About />
        <Projects />
        <Experience />
        <ThanksTo />
        <Milestones />
      </VStack>
    </Box>
  );
};

export default MainHome;
