import { Text, Link, VStack, Heading, Stack } from "@chakra-ui/react";

const About = () => {
  return (
    <Stack gap={3} justifyContent={"space-between"} alignItems={"start"} direction={{ base: "column", lg: "row" }}>
      <VStack alignItems={"start"} flex={1}>
        <Heading fontSize={"3xl"} fontWeight={"medium"}>
          About Me
        </Heading>
        <Text fontWeight={"medium"}>
          I&apos;m from Indonesia and I&apos;ve been working as a freelance fullstack web developer for more than 1 years. As a lifelong learner, I am passionate about keeping up with the latest technologies and using my knowledge to create
          innovative digital products and am always seeking out new opportunities to develop my skills and knowledge
        </Text>
      </VStack>
      <VStack alignItems={"start"} flex={1}>
        <Heading fontSize={"3xl"} fontWeight={"medium"}>
          What I Do
        </Heading>
        <Text textAlign={"start"}>
          In my free time, i love tinkering with new projects and experimenting with different design pattern and technologies. Also my hobby is explore and collect useful information then categorized them, cuz i love mapping new things and
          learn it effeciently. And i love to complete course to update and gain new knowledege, you can check my certificate in <Link href="https://www.linkedin.com/in/ahmad-gani/details/certifications/">this link</Link>
        </Text>
      </VStack>
    </Stack>
  );
};

export default About;
