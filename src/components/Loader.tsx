import { Center, Spinner } from "@chakra-ui/react";

export const Loader = () => (
  <Center h="200px" bg="teal" color="white" rounded="lg">
    <Spinner />
  </Center>
);
