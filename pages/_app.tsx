import { ChakraProvider } from "@chakra-ui/react";
import type { NextComponentType } from "next";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import theme from "theme";

type CustomNextComponent = NextComponentType & { Layout?: React.FC };
type CustomAppProps = AppProps & { Component: CustomNextComponent };

export default function App({ Component, pageProps }: CustomAppProps) {
  const Layout: CustomNextComponent | typeof Fragment = Component.Layout ? Component.Layout : Fragment;

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
