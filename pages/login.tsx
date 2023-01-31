import { Button, FormControl, FormLabel, Heading, HStack, Input, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { AuthLayout } from "components/layout";

const Login = () => {
  return (
    <VStack p="5" w="2xl" spacing="5" alignItems="stretch" bg="blue.700" rounded="xl" mx="3">
      <HStack>
        <Heading fontSize="xl">Login Page</Heading>
      </HStack>
      <VStack>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
      </VStack>
      <Button
        // isLoading
        // loadingText="Submitting"
        colorScheme="blue"
      >
        Submit
      </Button>
      <Text>
        First time here?{" "}
        <Link as={NextLink} href="/register">
          Register now.
        </Link>
      </Text>
    </VStack>
  );
};

Login.Layout = AuthLayout;
export default Login;
