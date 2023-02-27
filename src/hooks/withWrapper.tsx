import Router from "next/router";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Heading } from "@chakra-ui/react";

import { Query } from "generated-types";
import { CURRENT_USER } from "../../lib/GraphQL/Queries";

export const withWrapper = (WrappedComponent: React.FC, auth?: boolean) => {
  const HOC: React.FC = (props) => {
    const { data, loading, error } = useQuery<Query>(CURRENT_USER, { fetchPolicy: "cache-and-network" });

    useEffect(() => {
      if (auth && error) {
        Router.push("/login");
      } else {
        if (data && data.loggedInAuthor.username) {
          Router.push(`/${data.loggedInAuthor.username}`);
        }
      }
    }, [data, error]);

    if (loading) return <Heading>Loading...</Heading>;

    return <WrappedComponent {...props} />;
  };

  return HOC;
};
