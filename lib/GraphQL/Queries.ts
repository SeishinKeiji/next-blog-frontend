import { gql } from "@apollo/client";

export const GET_POST = gql`
  query GetPost($slug: String!) {
    getPost(payload: { slug: $slug }) {
      id
      author {
        username
        image
      }
      title
      like {
        likes
      }
      content
      slug
      createdAt
      updatedAt
      tags {
        id
        name
      }
    }
  }
`;

export const LOAD_POSTS = gql`
  query LoadPosts {
    showAllPost {
      title
    }
  }
`;

export const LOAD_POSTS_BY_AUTHOR = gql`
  query LoadPostsByAuthor($id: Int!) {
    getAuthorById(payload: { id: $id }) {
      image
      posts {
        id
        title
        slug
        tags {
          name
        }
      }
    }
  }
`;

export const CURRENT_USER = gql`
  query CurrentUser {
    loggedInAuthor {
      email
      name
      username
    }
  }
`;

export const SHOW_ALL_USERS = gql`
  query ShowAllUsers {
    showAllAuthor {
      id
      username
      email
    }
  }
`;

export const SHOW_ALL_TAGS = gql`
  query ShowAllTags {
    showAllTag {
      name
      id
    }
  }
`;
