import { Button, FormControl, FormLabel, Heading, HStack, Input, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { AuthLayout } from "components/layout";
import { useLazyQuery } from "@apollo/client";
import { LOGIN } from "lib/GraphQL/Queries";
import { Query } from "generated-types";
import { useState } from "react";

const Login = () => {
  const [fetchToken, { loading }] = useLazyQuery<Query>(LOGIN, {
    onCompleted(data) {
      //
    },
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginHandler: React.FormEventHandler<HTMLDivElement> = async (e) => {
    e.preventDefault();
    if (email && password) {
      await fetchToken({
        variables: {
          email,
          password,
        },
      });
    }
  };
  return (
    <VStack p="5" w="2xl" spacing="5" alignItems="stretch" bg="blue.700" rounded="xl" mx="3" as="form" onSubmit={onLoginHandler}>
      <HStack>
        <Heading fontSize="xl">Login Page</Heading>
      </HStack>
      <VStack>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
      </VStack>
      <Button isLoading={loading} loadingText="Submitting" colorScheme="blue">
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
