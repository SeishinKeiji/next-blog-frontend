import "./swiper.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import "@fontsource/lexend/500.css";
import "@fontsource/roboto-slab/500.css";

import { Chakra } from "src/context/chakra.context";
import { useApollo } from "src/hooks/apollo";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Chakra>
        <Component {...pageProps} />
      </Chakra>
    </ApolloProvider>
  );
}
