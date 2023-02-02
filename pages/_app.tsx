import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import type { NextComponentType } from "next";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import theme from "theme";
import { useApollo } from "lib/GraphQL/apollo";
import { UserProvider } from "src/context/user.global";

type CustomNextComponent = NextComponentType & { Layout?: React.FC };
type CustomAppProps = AppProps & { Component: CustomNextComponent };

export default function App({ Component, pageProps }: CustomAppProps) {
  const Layout: CustomNextComponent | typeof Fragment = Component.Layout ? Component.Layout : Fragment;
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <UserProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}
