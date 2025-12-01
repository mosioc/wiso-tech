/* eslint-disable */
import {
  useMutation,
  useQuery,
  useInfiniteQuery,
  UseMutationOptions,
  UseQueryOptions,
  UseInfiniteQueryOptions,
  InfiniteData,
} from '@tanstack/react-query';
import { fetcher } from '../lib/graphql-client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any };
};

export type Mutation = {
  __typename?: 'Mutation';
  signup?: Maybe<User>;
};

export type MutationSignupArgs = {
  input: SignupInput;
};

export type Query = {
  __typename?: 'Query';
  ok?: Maybe<Scalars['Boolean']['output']>;
  users?: Maybe<Array<User>>;
};

export type SignupInput = {
  email: Scalars['String']['input'];
  expertise: Array<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  profilePhoto: Scalars['String']['input'];
  userType: UserType;
  username: Scalars['String']['input'];
  yearsOfExperience: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  expertise?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['ID']['output']>;
  profilePhoto?: Maybe<Scalars['String']['output']>;
  userType?: Maybe<UserType>;
  username?: Maybe<Scalars['String']['output']>;
  yearsOfExperience?: Maybe<Scalars['Int']['output']>;
};

export enum UserType {
  Learner = 'LEARNER',
  Mentor = 'MENTOR',
}

export type SignupMutationVariables = Exact<{
  input: SignupInput;
}>;

export type SignupMutation = {
  __typename?: 'Mutation';
  signup?: {
    __typename?: 'User';
    id?: string | null;
    email?: string | null;
    username?: string | null;
    userType?: UserType | null;
  } | null;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: 'Query';
  users?: Array<{
    __typename?: 'User';
    id?: string | null;
    email?: string | null;
    username?: string | null;
    userType?: UserType | null;
    profilePhoto?: string | null;
  }> | null;
};

export const SignupDocument = `
    mutation Signup($input: SignupInput!) {
  signup(input: $input) {
    id
    email
    username
    userType
  }
}
    `;

export const useSignupMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    SignupMutation,
    TError,
    SignupMutationVariables,
    TContext
  >
) => {
  return useMutation<SignupMutation, TError, SignupMutationVariables, TContext>(
    {
      mutationKey: ['Signup'],
      mutationFn: (variables?: SignupMutationVariables) =>
        fetcher<SignupMutation, SignupMutationVariables>(
          SignupDocument,
          variables
        )(),
      ...options,
    }
  );
};

useSignupMutation.fetcher = (
  variables: SignupMutationVariables,
  options?: RequestInit['headers']
) =>
  fetcher<SignupMutation, SignupMutationVariables>(
    SignupDocument,
    variables,
    options
  );

export const GetUsersDocument = `
    query GetUsers {
  users {
    id
    email
    username
    userType
    profilePhoto
  }
}
    `;

export const useGetUsersQuery = <TData = GetUsersQuery, TError = unknown>(
  variables?: GetUsersQueryVariables,
  options?: Omit<UseQueryOptions<GetUsersQuery, TError, TData>, 'queryKey'> & {
    queryKey?: UseQueryOptions<GetUsersQuery, TError, TData>['queryKey'];
  }
) => {
  return useQuery<GetUsersQuery, TError, TData>({
    queryKey: variables === undefined ? ['GetUsers'] : ['GetUsers', variables],
    queryFn: fetcher<GetUsersQuery, GetUsersQueryVariables>(
      GetUsersDocument,
      variables
    ),
    ...options,
  });
};

useGetUsersQuery.getKey = (variables?: GetUsersQueryVariables) =>
  variables === undefined ? ['GetUsers'] : ['GetUsers', variables];

export const useInfiniteGetUsersQuery = <
  TData = InfiniteData<GetUsersQuery>,
  TError = unknown,
>(
  variables: GetUsersQueryVariables,
  options: Omit<
    UseInfiniteQueryOptions<GetUsersQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseInfiniteQueryOptions<
      GetUsersQuery,
      TError,
      TData
    >['queryKey'];
  }
) => {
  return useInfiniteQuery<GetUsersQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey:
          (optionsQueryKey ?? variables === undefined)
            ? ['GetUsers.infinite']
            : ['GetUsers.infinite', variables],
        queryFn: (metaData) =>
          fetcher<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, {
            ...variables,
            ...(metaData.pageParam ?? {}),
          })(),
        ...restOptions,
      };
    })()
  );
};

useInfiniteGetUsersQuery.getKey = (variables?: GetUsersQueryVariables) =>
  variables === undefined
    ? ['GetUsers.infinite']
    : ['GetUsers.infinite', variables];

useGetUsersQuery.fetcher = (
  variables?: GetUsersQueryVariables,
  options?: RequestInit['headers']
) =>
  fetcher<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    variables,
    options
  );
