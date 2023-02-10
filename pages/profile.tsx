import { GetServerSidePropsContext } from "next";
import { Heading } from "@chakra-ui/react";
import MainLayout from "components/layout/main.layout";
import { Query } from "generated-types";
import { withAuth } from "lib/auth";
import { addApolloState, initializeApollo } from "lib/GraphQL/apollo";
import { MY_BOOKMARK } from "lib/GraphQL/Queries";
const Profile = () => {
  return (
    <MainLayout title="Profile">
      <Heading>Username</Heading>
    </MainLayout>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const client = initializeApollo({ headers: context?.req?.headers });

  try {
    await client.query<Query>({
      query: MY_BOOKMARK,
    });

    return addApolloState(client, {
      props: {},
    });
  } catch {
    return {
      props: {},
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
};

export default withAuth(Profile);
