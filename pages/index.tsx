import { VStack } from "@chakra-ui/react";
import { CardArticle, TopCardArticle } from "components/card-article";
import MainLayout from "components/layout/main.layout";

export default function Home() {
  return (
    <MainLayout title="Home">
      <VStack>
        <TopCardArticle />
        <CardArticle />
      </VStack>
    </MainLayout>
  );
}
