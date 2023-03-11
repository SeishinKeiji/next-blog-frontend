import { Heading } from "@chakra-ui/react";
import MainLayout from "components/layout/main.layout";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const { post } = router.query;

  return (
    <MainLayout title={post as string}>
      <Heading textAlign={"center"}>Post title: {post}</Heading>
    </MainLayout>
  );
};

export default Profile;
