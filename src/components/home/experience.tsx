import { Stack } from "@chakra-ui/react";
import Skills from "./skills";
import Tools from "./tools";

const Experience = () => {
  return (
    <Stack gap={3} justifyContent={"space-between"} alignItems={"stretch"} direction={{ base: "column", lg: "row" }}>
      <Skills />
      <Tools />
    </Stack>
  );
};

export default Experience;
