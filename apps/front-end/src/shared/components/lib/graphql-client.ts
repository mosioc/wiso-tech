import { GraphQLClient } from 'graphql-request';

// This points to your Next.js API route
const endpoint =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
  'http://localhost:3001/api/graphql';

export const graphQLClient = new GraphQLClient(endpoint, {
  // You can add headers here if you have auth later
  // headers: {
  //   authorization: `Bearer ${token}`,
  // },
});
