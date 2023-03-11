import { HStack } from "@chakra-ui/react";
import Skills from "./skills";
import Tools from "./tools";

const Experience = () => {
  return (
    <HStack gap={3} justifyContent={"space-between"} alignItems={"start"}>
      <Skills />
      <Tools />
    </HStack>
  );
};

export default Experience;
