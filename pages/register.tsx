import { Button, FormControl, FormHelperText, FormLabel, Heading, HStack, Input, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { AuthLayout } from "components/layout";

const Register = () => {
  return (
    <AuthLayout title="Register">
      <VStack p="5" w="2xl" spacing="5" alignItems="stretch" bg="blue.700" rounded="xl" mx="3">
        <HStack>
          <Heading fontSize="xl">Register Page</Heading>
        </HStack>
        <VStack>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input type="text" />
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
          Already have an account?{" "}
          <Link as={NextLink} href="/login">
            Login
          </Link>
        </Text>
      </VStack>
    </AuthLayout>
  );
};

export default Register;
