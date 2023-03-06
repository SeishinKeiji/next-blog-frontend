import { Heading, Input, VStack } from "@chakra-ui/react";
import Editor from "components/editor";
import UploadImage from "components/fileUpload";
import MainLayout from "components/layout/main.layout";
import TagInput from "src/context/tag.context";
// import dynamic from "next/dynamic";

// const Editor = dynamic(() => import("components/editor"), {
//   loading: () => <>loading...</>,
//   ssr: false,
// });

const NewPost = () => {
  return (
    <MainLayout title={"New Post"}>
      <style jsx global>{`
        #editorjs h1 {
          all: unset !important;
        }
      `}</style>

      <Heading>Create Post</Heading>
      <VStack as="form" maxW="50rem" w="full" alignItems={"stretch"} spacing={4} bg="cyan.100" p={10} rounded="lg">
        <UploadImage />
        <Input type={"text"} fontSize="5xl" size="lg" border="none" background="transparent" _focus={{ boxShadow: "none" }} placeholder="New post title here..." _placeholder={{ fontWeight: 700 }} />
        <TagInput />
        <Editor />
      </VStack>
    </MainLayout>
  );
};

export default NewPost;
