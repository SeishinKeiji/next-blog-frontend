import { Button, Center, Checkbox, Container, FormControl, FormLabel, Heading, IconButton, Input, InputGroup, InputRightElement, Link, Stack, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { useState } from "react";

import { Mutation } from "generated-types";
import { AuthLayout } from "components/layout/auth.layout";
import { LOGIN } from "lib/GraphQL/Mutations";
import { withWrapper } from "src/hooks/withWrapper";
import { CURRENT_USER } from "lib/GraphQL/Queries";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

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
  const [show, setShow] = useState(false);

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
              loggedInAuthor: { ...user },
            },
          });
        },
      });
    }
  };

  return (
    <AuthLayout>
      <Container maxW="7xl" p={{ base: 5, md: 10 }}>
        <Center>
          <Stack spacing={4}>
            <Stack align="center">
              <Heading fontSize="2xl">Sign in to your account</Heading>
            </Stack>
            <VStack as="form" boxSize={{ base: "xs", sm: "sm", md: "md" }} h="max-content !important" bg={useColorModeValue("white", "gray.700")} rounded="lg" boxShadow="lg" p={{ base: 5, sm: 10 }} spacing={8}>
              <VStack spacing={4} w="100%">
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input rounded="md" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input rounded="md" type={show ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <InputRightElement>
                      <IconButton colorScheme={"blue"} variant={"ghost"} aria-label="Set Visibility" icon={show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />} onClick={() => setShow((x) => !x)} />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </VStack>
              <VStack w="100%">
                <Stack direction="row" justify="space-between" w="100%">
                  <Checkbox colorScheme="green" size="md">
                    Remember me
                  </Checkbox>
                  <Link fontSize={{ base: "md", sm: "md" }}>Forgot password?</Link>
                </Stack>
                <Button
                  bg="green.300"
                  color="white"
                  _hover={{
                    bg: "green.500",
                  }}
                  rounded="md"
                  w="100%"
                  onClick={handleLogin}
                  isLoading={loading}
                >
                  Sign in
                </Button>
              </VStack>
            </VStack>
          </Stack>
        </Center>
      </Container>
    </AuthLayout>
  );
};

export default withWrapper(Login);
