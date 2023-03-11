import { Input, VStack } from "@chakra-ui/react";
import UploadImage from "components/fileUpload";
import MainLayout from "components/layout/main.layout";
import TagInput from "src/context/tag.context";
import { Loader } from "components/Loader";
import dynamic from "next/dynamic";

const AsyncEditor = dynamic(() => import("../src/components/editor"), {
  loading: () => <Loader />,
  ssr: false,
});

const NewPost = () => {
  return (
    <MainLayout title={"New Post"}>
      <VStack as="form" maxW="50rem" w="full" alignItems={"stretch"} spacing={4} bg="cyan.100" p={10} rounded="lg">
        <UploadImage />
        <Input type={"text"} fontSize="5xl" size="lg" border="none" background="transparent" _focus={{ boxShadow: "none" }} placeholder="New post title here..." _placeholder={{ fontWeight: 700 }} />
        <TagInput />
        <AsyncEditor />
      </VStack>
    </MainLayout>
  );
};

export default NewPost;
