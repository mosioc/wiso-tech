import { createYoga } from 'graphql-yoga';

import { schema } from '@/graphql/schema';

const { handleRequest } = createYoga({
  schema,
  // While using Next.js App Router, you need to configure the graphql endpoint
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Request, Response },
  cors: {
    origin: 'http://localhost:3000', // Allow your specific frontend origin
    credentials: true,
    allowedHeaders: ['X-Custom-Header', 'Content-Type'],
    methods: ['POST', 'GET', 'OPTIONS'],
  },
});

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};
