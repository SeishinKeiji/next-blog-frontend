import { Box, Heading } from "@chakra-ui/react";
import MainLayout from "components/layout/main.layout";

const Settings = () => {
  return (
    <MainLayout title="Dashboard">
      <Box px={4} textAlign={"center"}>
        <Heading>Dashboard Page</Heading>
      </Box>
    </MainLayout>
  );
};

export default Settings;
