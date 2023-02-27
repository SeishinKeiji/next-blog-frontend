import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

/** Author model */
export type Author = {
  __typename?: 'Author';
  bookmarks: Array<Bookmark>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Float'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  posts: Array<Post>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

/** Like Post Model */
export type Bookmark = {
  __typename?: 'Bookmark';
  bookmarkedPosts: Array<Post>;
  bookmarks: Scalars['Float'];
};

export type CreateAuthorInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type CreatePostInput = {
  content: Scalars['String'];
  draft?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type CreateTagInput = {
  name: Scalars['String'];
};

export type DeleteTagInput = {
  id: Scalars['Int'];
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
};

export type GetAuthorIdInput = {
  id: Scalars['Int'];
};

export type GetByTagInput = {
  name: Scalars['String'];
};

export type GetPostByIdInput = {
  id: Scalars['Int'];
};

export type GetPostBySlugInput = {
  slug: Scalars['String'];
};

/** Like Post Model */
export type Like = {
  __typename?: 'Like';
  likes: Scalars['Int'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginType = {
  __typename?: 'LoginType';
  email: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  bookmarkPost: Bookmark;
  createAccount: Author;
  createPost: Post;
  createTag: Tag;
  deleteAuthor: ResponseType;
  deletePost: ResponseType;
  deleteTag: ResponseType;
  likePost: Like;
  login: LoginType;
  logout: ResponseType;
  resetPassword: ResponseType;
  unregisterUser: ResponseType;
  updateAuthor: Author;
  updatePassword: ResponseType;
  updatePost: Post;
  updateTag: Tag;
  verifyEmail: ResponseType;
};


export type MutationBookmarkPostArgs = {
  payload: GetPostByIdInput;
};


export type MutationCreateAccountArgs = {
  payload: CreateAuthorInput;
};


export type MutationCreatePostArgs = {
  payload: CreatePostInput;
};


export type MutationCreateTagArgs = {
  payload: CreateTagInput;
};


export type MutationDeleteAuthorArgs = {
  payload: GetAuthorIdInput;
};


export type MutationDeletePostArgs = {
  payload: GetPostByIdInput;
};


export type MutationDeleteTagArgs = {
  payload: DeleteTagInput;
};


export type MutationLikePostArgs = {
  payload: GetPostByIdInput;
};


export type MutationLoginArgs = {
  payload: LoginInput;
};


export type MutationResetPasswordArgs = {
  payload: ResetPasswordInput;
};


export type MutationUnregisterUserArgs = {
  payload: VerifyEmailInput;
};


export type MutationUpdateAuthorArgs = {
  file?: InputMaybe<Scalars['Upload']>;
  payload: UpdateAuthorInput;
};


export type MutationUpdatePasswordArgs = {
  payload: UpdatePasswordInput;
};


export type MutationUpdatePostArgs = {
  payload: UpdatePostInput;
};


export type MutationUpdateTagArgs = {
  payload: UpdateTagInput;
};


export type MutationVerifyEmailArgs = {
  payload: VerifyEmailInput;
};

/** Post model */
export type Post = {
  __typename?: 'Post';
  author: Author;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  like: Like;
  slug: Scalars['String'];
  tags: Array<Tag>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  forgotPassword: ResponseType;
  getAuthorById: Author;
  getPost: Post;
  loggedInAuthor: Author;
  showAllAuthor: Array<Author>;
  showAllPost: Array<Post>;
  showAllTag: Array<Tag>;
  showByTag: Tag;
};


export type QueryForgotPasswordArgs = {
  payload: ForgotPasswordInput;
};


export type QueryGetAuthorByIdArgs = {
  payload: GetAuthorIdInput;
};


export type QueryGetPostArgs = {
  payload: GetPostBySlugInput;
};


export type QueryShowByTagArgs = {
  payload: GetByTagInput;
};

export type ResetPasswordInput = {
  authorID: Scalars['Int'];
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

/** Return Response Type */
export type ResponseType = {
  __typename?: 'ResponseType';
  message: Scalars['String'];
};

/** Tag model */
export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  name: Scalars['String'];
  posts: Array<Post>;
};

export type UpdateAuthorInput = {
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdatePasswordInput = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type UpdatePostInput = {
  content?: InputMaybe<Scalars['String']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateTagInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type VerifyEmailInput = {
  code: Scalars['String'];
};

export type CreatePostMutationVariables = Exact<{
  content: Scalars['String'];
  tags?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', slug: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'ResponseType', message: string } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginType', username: string, email: string } };

export type LikePostMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type LikePostMutation = { __typename?: 'Mutation', likePost: { __typename?: 'Like', likes: number } };

export type UpdatePostMutationVariables = Exact<{
  content: Scalars['String'];
  tags?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  id: Scalars['Int'];
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', slug: string } };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: { __typename?: 'ResponseType', message: string } };

export type CreateAuthorMutationVariables = Exact<{
  name: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type CreateAuthorMutation = { __typename?: 'Mutation', createAccount: { __typename?: 'Author', email: string } };

export type CreateTagMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateTagMutation = { __typename?: 'Mutation', createTag: { __typename?: 'Tag', name: string, id: number } };

export type UpdateTagMutationVariables = Exact<{
  id: Scalars['Int'];
  name: Scalars['String'];
}>;


export type UpdateTagMutation = { __typename?: 'Mutation', updateTag: { __typename?: 'Tag', name: string, id: number } };

export type UpdateAuthorMutationVariables = Exact<{
  id: Scalars['Int'];
  username: Scalars['String'];
  file?: InputMaybe<Scalars['Upload']>;
}>;


export type UpdateAuthorMutation = { __typename?: 'Mutation', updateAuthor: { __typename?: 'Author', username: string, image?: string | null } };

export type DeleteAuthorMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteAuthorMutation = { __typename?: 'Mutation', deleteAuthor: { __typename?: 'ResponseType', message: string } };

export type DeleteTagMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTagMutation = { __typename?: 'Mutation', deleteTag: { __typename?: 'ResponseType', message: string } };

export type GetPostQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetPostQuery = { __typename?: 'Query', getPost: { __typename?: 'Post', id: number, title: string, content: string, slug: string, createdAt: any, updatedAt: any, author: { __typename?: 'Author', username: string, image?: string | null }, like: { __typename?: 'Like', likes: number }, tags: Array<{ __typename?: 'Tag', id: number, name: string }> } };

export type LoadPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type LoadPostsQuery = { __typename?: 'Query', showAllPost: Array<{ __typename?: 'Post', title: string }> };

export type LoadPostsByAuthorQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type LoadPostsByAuthorQuery = { __typename?: 'Query', getAuthorById: { __typename?: 'Author', image?: string | null, posts: Array<{ __typename?: 'Post', id: number, title: string, slug: string, tags: Array<{ __typename?: 'Tag', name: string }> }> } };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', loggedInAuthor: { __typename?: 'Author', email: string, username: string } };

export type ShowAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type ShowAllUsersQuery = { __typename?: 'Query', showAllAuthor: Array<{ __typename?: 'Author', id: number, username: string, email: string }> };

export type ShowAllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type ShowAllTagsQuery = { __typename?: 'Query', showAllTag: Array<{ __typename?: 'Tag', name: string, id: number }> };


export const CreatePostDocument = gql`
    mutation CreatePost($content: String!, $tags: [String!], $slug: String!, $title: String!) {
  createPost(
    payload: {title: $title, content: $content, tags: $tags, slug: $slug}
  ) {
    slug
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      content: // value for 'content'
 *      tags: // value for 'tags'
 *      slug: // value for 'slug'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    message
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(payload: {email: $email, password: $password}) {
    username
    email
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LikePostDocument = gql`
    mutation LikePost($id: Int!) {
  likePost(payload: {id: $id}) {
    likes
  }
}
    `;
export type LikePostMutationFn = Apollo.MutationFunction<LikePostMutation, LikePostMutationVariables>;

/**
 * __useLikePostMutation__
 *
 * To run a mutation, you first call `useLikePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likePostMutation, { data, loading, error }] = useLikePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLikePostMutation(baseOptions?: Apollo.MutationHookOptions<LikePostMutation, LikePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikePostMutation, LikePostMutationVariables>(LikePostDocument, options);
      }
export type LikePostMutationHookResult = ReturnType<typeof useLikePostMutation>;
export type LikePostMutationResult = Apollo.MutationResult<LikePostMutation>;
export type LikePostMutationOptions = Apollo.BaseMutationOptions<LikePostMutation, LikePostMutationVariables>;
export const UpdatePostDocument = gql`
    mutation UpdatePost($content: String!, $tags: [String!], $slug: String!, $title: String!, $id: Int!) {
  updatePost(
    payload: {title: $title, content: $content, tags: $tags, slug: $slug, id: $id}
  ) {
    slug
  }
}
    `;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      content: // value for 'content'
 *      tags: // value for 'tags'
 *      slug: // value for 'slug'
 *      title: // value for 'title'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, options);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const DeletePostDocument = gql`
    mutation DeletePost($id: Int!) {
  deletePost(payload: {id: $id}) {
    message
  }
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const CreateAuthorDocument = gql`
    mutation CreateAuthor($name: String!, $username: String!, $password: String!, $email: String!) {
  createAccount(
    payload: {name: $name, username: $username, password: $password, email: $email}
  ) {
    email
  }
}
    `;
export type CreateAuthorMutationFn = Apollo.MutationFunction<CreateAuthorMutation, CreateAuthorMutationVariables>;

/**
 * __useCreateAuthorMutation__
 *
 * To run a mutation, you first call `useCreateAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuthorMutation, { data, loading, error }] = useCreateAuthorMutation({
 *   variables: {
 *      name: // value for 'name'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateAuthorMutation(baseOptions?: Apollo.MutationHookOptions<CreateAuthorMutation, CreateAuthorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAuthorMutation, CreateAuthorMutationVariables>(CreateAuthorDocument, options);
      }
export type CreateAuthorMutationHookResult = ReturnType<typeof useCreateAuthorMutation>;
export type CreateAuthorMutationResult = Apollo.MutationResult<CreateAuthorMutation>;
export type CreateAuthorMutationOptions = Apollo.BaseMutationOptions<CreateAuthorMutation, CreateAuthorMutationVariables>;
export const CreateTagDocument = gql`
    mutation CreateTag($name: String!) {
  createTag(payload: {name: $name}) {
    name
    id
  }
}
    `;
export type CreateTagMutationFn = Apollo.MutationFunction<CreateTagMutation, CreateTagMutationVariables>;

/**
 * __useCreateTagMutation__
 *
 * To run a mutation, you first call `useCreateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTagMutation, { data, loading, error }] = useCreateTagMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateTagMutation(baseOptions?: Apollo.MutationHookOptions<CreateTagMutation, CreateTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTagMutation, CreateTagMutationVariables>(CreateTagDocument, options);
      }
export type CreateTagMutationHookResult = ReturnType<typeof useCreateTagMutation>;
export type CreateTagMutationResult = Apollo.MutationResult<CreateTagMutation>;
export type CreateTagMutationOptions = Apollo.BaseMutationOptions<CreateTagMutation, CreateTagMutationVariables>;
export const UpdateTagDocument = gql`
    mutation UpdateTag($id: Int!, $name: String!) {
  updateTag(payload: {id: $id, name: $name}) {
    name
    id
  }
}
    `;
export type UpdateTagMutationFn = Apollo.MutationFunction<UpdateTagMutation, UpdateTagMutationVariables>;

/**
 * __useUpdateTagMutation__
 *
 * To run a mutation, you first call `useUpdateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTagMutation, { data, loading, error }] = useUpdateTagMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateTagMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTagMutation, UpdateTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTagMutation, UpdateTagMutationVariables>(UpdateTagDocument, options);
      }
export type UpdateTagMutationHookResult = ReturnType<typeof useUpdateTagMutation>;
export type UpdateTagMutationResult = Apollo.MutationResult<UpdateTagMutation>;
export type UpdateTagMutationOptions = Apollo.BaseMutationOptions<UpdateTagMutation, UpdateTagMutationVariables>;
export const UpdateAuthorDocument = gql`
    mutation UpdateAuthor($id: Int!, $username: String!, $file: Upload) {
  updateAuthor(payload: {id: $id, username: $username}, file: $file) {
    username
    image
  }
}
    `;
export type UpdateAuthorMutationFn = Apollo.MutationFunction<UpdateAuthorMutation, UpdateAuthorMutationVariables>;

/**
 * __useUpdateAuthorMutation__
 *
 * To run a mutation, you first call `useUpdateAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAuthorMutation, { data, loading, error }] = useUpdateAuthorMutation({
 *   variables: {
 *      id: // value for 'id'
 *      username: // value for 'username'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUpdateAuthorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAuthorMutation, UpdateAuthorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAuthorMutation, UpdateAuthorMutationVariables>(UpdateAuthorDocument, options);
      }
export type UpdateAuthorMutationHookResult = ReturnType<typeof useUpdateAuthorMutation>;
export type UpdateAuthorMutationResult = Apollo.MutationResult<UpdateAuthorMutation>;
export type UpdateAuthorMutationOptions = Apollo.BaseMutationOptions<UpdateAuthorMutation, UpdateAuthorMutationVariables>;
export const DeleteAuthorDocument = gql`
    mutation DeleteAuthor($id: Int!) {
  deleteAuthor(payload: {id: $id}) {
    message
  }
}
    `;
export type DeleteAuthorMutationFn = Apollo.MutationFunction<DeleteAuthorMutation, DeleteAuthorMutationVariables>;

/**
 * __useDeleteAuthorMutation__
 *
 * To run a mutation, you first call `useDeleteAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAuthorMutation, { data, loading, error }] = useDeleteAuthorMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAuthorMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAuthorMutation, DeleteAuthorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAuthorMutation, DeleteAuthorMutationVariables>(DeleteAuthorDocument, options);
      }
export type DeleteAuthorMutationHookResult = ReturnType<typeof useDeleteAuthorMutation>;
export type DeleteAuthorMutationResult = Apollo.MutationResult<DeleteAuthorMutation>;
export type DeleteAuthorMutationOptions = Apollo.BaseMutationOptions<DeleteAuthorMutation, DeleteAuthorMutationVariables>;
export const DeleteTagDocument = gql`
    mutation DeleteTag($id: Int!) {
  deleteTag(payload: {id: $id}) {
    message
  }
}
    `;
export type DeleteTagMutationFn = Apollo.MutationFunction<DeleteTagMutation, DeleteTagMutationVariables>;

/**
 * __useDeleteTagMutation__
 *
 * To run a mutation, you first call `useDeleteTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTagMutation, { data, loading, error }] = useDeleteTagMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTagMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTagMutation, DeleteTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTagMutation, DeleteTagMutationVariables>(DeleteTagDocument, options);
      }
export type DeleteTagMutationHookResult = ReturnType<typeof useDeleteTagMutation>;
export type DeleteTagMutationResult = Apollo.MutationResult<DeleteTagMutation>;
export type DeleteTagMutationOptions = Apollo.BaseMutationOptions<DeleteTagMutation, DeleteTagMutationVariables>;
export const GetPostDocument = gql`
    query GetPost($slug: String!) {
  getPost(payload: {slug: $slug}) {
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

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const LoadPostsDocument = gql`
    query LoadPosts {
  showAllPost {
    title
  }
}
    `;

/**
 * __useLoadPostsQuery__
 *
 * To run a query within a React component, call `useLoadPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoadPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoadPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoadPostsQuery(baseOptions?: Apollo.QueryHookOptions<LoadPostsQuery, LoadPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoadPostsQuery, LoadPostsQueryVariables>(LoadPostsDocument, options);
      }
export function useLoadPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoadPostsQuery, LoadPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoadPostsQuery, LoadPostsQueryVariables>(LoadPostsDocument, options);
        }
export type LoadPostsQueryHookResult = ReturnType<typeof useLoadPostsQuery>;
export type LoadPostsLazyQueryHookResult = ReturnType<typeof useLoadPostsLazyQuery>;
export type LoadPostsQueryResult = Apollo.QueryResult<LoadPostsQuery, LoadPostsQueryVariables>;
export const LoadPostsByAuthorDocument = gql`
    query LoadPostsByAuthor($id: Int!) {
  getAuthorById(payload: {id: $id}) {
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

/**
 * __useLoadPostsByAuthorQuery__
 *
 * To run a query within a React component, call `useLoadPostsByAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoadPostsByAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoadPostsByAuthorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLoadPostsByAuthorQuery(baseOptions: Apollo.QueryHookOptions<LoadPostsByAuthorQuery, LoadPostsByAuthorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoadPostsByAuthorQuery, LoadPostsByAuthorQueryVariables>(LoadPostsByAuthorDocument, options);
      }
export function useLoadPostsByAuthorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoadPostsByAuthorQuery, LoadPostsByAuthorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoadPostsByAuthorQuery, LoadPostsByAuthorQueryVariables>(LoadPostsByAuthorDocument, options);
        }
export type LoadPostsByAuthorQueryHookResult = ReturnType<typeof useLoadPostsByAuthorQuery>;
export type LoadPostsByAuthorLazyQueryHookResult = ReturnType<typeof useLoadPostsByAuthorLazyQuery>;
export type LoadPostsByAuthorQueryResult = Apollo.QueryResult<LoadPostsByAuthorQuery, LoadPostsByAuthorQueryVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  loggedInAuthor {
    email
    username
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const ShowAllUsersDocument = gql`
    query ShowAllUsers {
  showAllAuthor {
    id
    username
    email
  }
}
    `;

/**
 * __useShowAllUsersQuery__
 *
 * To run a query within a React component, call `useShowAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useShowAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<ShowAllUsersQuery, ShowAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShowAllUsersQuery, ShowAllUsersQueryVariables>(ShowAllUsersDocument, options);
      }
export function useShowAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShowAllUsersQuery, ShowAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShowAllUsersQuery, ShowAllUsersQueryVariables>(ShowAllUsersDocument, options);
        }
export type ShowAllUsersQueryHookResult = ReturnType<typeof useShowAllUsersQuery>;
export type ShowAllUsersLazyQueryHookResult = ReturnType<typeof useShowAllUsersLazyQuery>;
export type ShowAllUsersQueryResult = Apollo.QueryResult<ShowAllUsersQuery, ShowAllUsersQueryVariables>;
export const ShowAllTagsDocument = gql`
    query ShowAllTags {
  showAllTag {
    name
    id
  }
}
    `;

/**
 * __useShowAllTagsQuery__
 *
 * To run a query within a React component, call `useShowAllTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowAllTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowAllTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useShowAllTagsQuery(baseOptions?: Apollo.QueryHookOptions<ShowAllTagsQuery, ShowAllTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShowAllTagsQuery, ShowAllTagsQueryVariables>(ShowAllTagsDocument, options);
      }
export function useShowAllTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShowAllTagsQuery, ShowAllTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShowAllTagsQuery, ShowAllTagsQueryVariables>(ShowAllTagsDocument, options);
        }
export type ShowAllTagsQueryHookResult = ReturnType<typeof useShowAllTagsQuery>;
export type ShowAllTagsLazyQueryHookResult = ReturnType<typeof useShowAllTagsLazyQuery>;
export type ShowAllTagsQueryResult = Apollo.QueryResult<ShowAllTagsQuery, ShowAllTagsQueryVariables>;