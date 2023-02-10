import { gql } from "@apollo/client";

export const MY_BOOKMARK = gql`
  query MyBookmark {
    getMyBookmark {
      id
      title
      author {
        id
        username
      }
    }
  }
`;

export const GET_POST = gql`
  query GetPost($slug: String!) {
    getPost(payload: { slug: $slug }) {
      id
      author {
        username
        image
      }
      title
      likes
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

export const GET_LIKE = gql`
  query GetLikePost($id: Int!) {
    likedPost(payload: { id: $id }) {
      isLiked
    }
  }
`;

export const GET_ROLE = gql`
  query GetRole($id: Int!) {
    getAuthorById(payload: { id: $id }) {
      role
    }
  }
`;

export const LOAD_POSTS = gql`
  query LoadPosts {
    showAllPost {
      id
      title
      slug
      tags {
        name
      }
      author {
        image
      }
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
      role
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
