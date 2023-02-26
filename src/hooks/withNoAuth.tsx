import Router from "next/router";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Heading } from "@chakra-ui/react";

import { Query } from "generated-types";
import { CURRENT_USER } from "../../lib/GraphQL/Queries";

export const withNoAuth = (WrappedComponent: React.FC) => {
  const HOC: React.FC = (props) => {
    const { data, loading } = useQuery<Query>(CURRENT_USER, { fetchPolicy: "cache-and-network" });

    useEffect(() => {
      if (data && data.loggedInAuthor.username) {
        Router.push(`/${data.loggedInAuthor.username}`);
      }
    }, [data]);

    if (loading) return <Heading>Loading...</Heading>;

    return <WrappedComponent {...props} />;
  };

  return HOC;
};
