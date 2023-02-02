import { Button, FormControl, FormLabel, Heading, HStack, Input, Link, Text, useToast, VStack } from "@chakra-ui/react";
import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import NextLink from "next/link";

import { Query } from "generated-types";
import { AuthLayout } from "components/layout";
import { LOGIN } from "lib/GraphQL/Queries";
import { useDispatchUser } from "src/context/user.global";

const Login = () => {
  const user = useDispatchUser();
  const toast = useToast();

  const [fetchToken, { loading }] = useLazyQuery<Query>(LOGIN, {
    onError(error) {
      toast({
        title: "Cannot Login.",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    },
    onCompleted(data) {
      user({
        type: "create",
        id: data.login.id,
        email: data.login.email,
        token: data.login.token,
        username: data.login.username,
      });
    },
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
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
    <VStack p="5" w="2xl" spacing="5" alignItems="stretch" bg="blue.700" rounded="xl" mx="3">
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
      <Button isLoading={loading} loadingText="Submitting" colorScheme="blue" onClick={handleLogin}>
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
