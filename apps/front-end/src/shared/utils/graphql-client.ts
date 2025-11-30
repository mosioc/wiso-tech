/* eslint-disable */
import { GraphQLClient } from 'graphql-request';

// Create a single client instance
export const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/graphql',
  {
    headers: {
      'Content-Type': 'application/json',
      // Add Authorization header here later:
      // Authorization: `Bearer ${token}`
    },
  }
);

// This function is used by the generated hooks

export const fetcher = <
  TData,
  TVariables extends Record<string, any> | undefined = undefined,
>(
  query: string,
  variables?: TVariables,
  headers?: RequestInit['headers']
) => {
  return async () => {
    // Change <TData, TVariables> to <TData, any>

    return client.request<TData, any>(query, variables, headers);
  };
};
