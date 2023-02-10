import Router from "next/router";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Heading } from "@chakra-ui/react";
import { Query } from "generated-types";
import { CURRENT_USER } from "./GraphQL/Queries";

export const withAuth = (WrappedComponent: React.FC) => {
  const HOC: React.FC = (props) => {
    const { data, loading } = useQuery<Query>(CURRENT_USER, {
      onError(error) {
        console.log(error);
      },
      onCompleted(data) {
        console.log(data);
      },
    });

    useEffect(() => {
      if (data && !data.loggedInAuthor.email) {
        Router.push("/login");
      }
    }, [data]);

    if (loading) return <Heading>Loading...</Heading>;

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export const withNoAuth = (WrappedComponent: React.FC) => {
  const HOC: React.FC = (props) => {
    const { data, loading } = useQuery<Query>(CURRENT_USER, {
      onError(error) {
        console.log(error);
      },
      onCompleted(data) {
        console.log(data);
      },
    });

    useEffect(() => {
      if (data && data.loggedInAuthor.email) {
        Router.push("/profile");
      }
    }, [data]);

    if (loading) return <Heading>Loading...</Heading>;

    return <WrappedComponent {...props} />;
  };

  return HOC;
};
