import { GetServerSidePropsContext } from "next";
import { Heading } from "@chakra-ui/react";
import MainLayout from "components/layout/main.layout";
import { Query } from "generated-types";
import { addApolloState, initializeApollo } from "src/hooks/apollo";
import { CURRENT_USER } from "lib/GraphQL/Queries";
import { useRouter } from "next/router";
import { withWrapper } from "src/hooks/withWrapper";

const Profile = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <MainLayout title={username as string}>
      <Heading>Profile page: {username}</Heading>
    </MainLayout>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const client = initializeApollo({ headers: context?.req?.headers });

  try {
    await client.query<Query>({
      query: CURRENT_USER,
    });

    return addApolloState(client, {
      props: {},
    });
  } catch {
    return {
      props: {},
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
};

export default withWrapper(Profile, true);
