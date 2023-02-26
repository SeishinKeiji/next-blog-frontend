import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation CreatePost($content: String!, $tags: [String!], $slug: String!, $title: String!) {
    createPost(payload: { title: $title, content: $content, tags: $tags, slug: $slug }) {
      slug
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout {
      message
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(payload: { email: $email, password: $password }) {
      username
      email
    }
  }
`;

export const LIKE_POST = gql`
  mutation LikePost($id: Int!) {
    likePost(payload: { id: $id }) {
      likes
    }
  }
`;

export const EDIT_POST = gql`
  mutation UpdatePost($content: String!, $tags: [String!], $slug: String!, $title: String!, $id: Int!) {
    updatePost(payload: { title: $title, content: $content, tags: $tags, slug: $slug, id: $id }) {
      slug
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($id: Int!) {
    deletePost(payload: { id: $id }) {
      success
    }
  }
`;

export const REGISTER = gql`
  mutation CreateAuthor($username: String!, $password: String!, $email: String!) {
    createAccount(payload: { username: $username, password: $password, email: $email }) {
      email
    }
  }
`;

export const CREATE_TAG = gql`
  mutation CreateTag($name: String!) {
    createTag(payload: { name: $name }) {
      name
      id
    }
  }
`;

export const UPDATE_TAG = gql`
  mutation UpdateTag($id: Int!, $name: String!) {
    updateTag(payload: { id: $id, name: $name }) {
      name
      id
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation UpdateAuthor($id: Int!, $username: String!, $file: Upload) {
    updateAuthor(payload: { id: $id, username: $username }, file: $file) {
      username
      image
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteAuthor($id: Int!) {
    deleteAuthor(payload: { id: $id }) {
      success
    }
  }
`;

export const DELETE_TAG = gql`
  mutation DeleteTag($id: Int!) {
    deleteTag(payload: { id: $id }) {
      success
    }
  }
`;
