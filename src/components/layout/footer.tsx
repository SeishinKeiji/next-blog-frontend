import { HStack, Text, Image, Link, Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box px={4} as="footer">
      <HStack alignItems={"center"} justifyContent={"space-between"} maxW={1400} mx={"auto"} h={16} p={5}>
        <Text fontWeight={"medium"}>All rights reserved &copy; Ahmad Gani {new Date().getFullYear()}</Text>
        <HStack spacing={5}>
          <Link display={"flex"} href="https://www.linkedin.com/in/ahmad-gani/">
            <Image src="/icons/contact/linkedin.svg" alt="Linkedin" w={"24px"} />
            LinkedIn
          </Link>
          <Link display={"flex"} href="https://github.com/ahmadxgani">
            <Image src="/icons/contact/github.svg" alt="Linkedin" w={"24px"} />
            Github
          </Link>
          <Link display={"flex"} href="mailto:ahmadxgani01@gmail.com">
            <Image src="/icons/contact/email.svg" alt="Linkedin" w={"24px"} />
            Email
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
