import { HStack } from "@chakra-ui/react";

export const AuthLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <HStack position="absolute" width="full" height="100vh" maxW="full" justifyContent="center" alignItems="center">
      {children}
    </HStack>
  );
};
