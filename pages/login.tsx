import { Button, FormControl, FormLabel, Heading, HStack, Input, Link, Text, useToast, VStack } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import NextLink from "next/link";

import { Mutation } from "generated-types";
import { AuthLayout } from "components/layout";
import { LOGIN } from "lib/GraphQL/Mutations";
import { withNoAuth } from "src/hooks/withNoAuth";
import { CURRENT_USER } from "lib/GraphQL/Queries";

const Login = () => {
  const toast = useToast();

  const [fetchToken, { loading }] = useMutation<Mutation>(LOGIN, {
    onError(error) {
      toast({
        title: "Cannot Login.",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    },
    fetchPolicy: "no-cache",
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
        update: (cache, { data }) => {
          const user = (({ __typename, image, ...data }) => data)(data!.login);
          cache.writeQuery({
            query: CURRENT_USER,
            data: {
              loggedInAuthor: {
                email: user.email,
                username: user.username,
              },
            },
          });
        },
      });
    }
  };

  return (
    <AuthLayout title="Login">
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
    </AuthLayout>
  );
};

export default withNoAuth(Login);
