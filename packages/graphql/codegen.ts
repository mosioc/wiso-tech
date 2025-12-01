import { type CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  // Ensure your backend is running on this port when you run codegen!
  schema: 'http://localhost:3001/api/graphql',

  // FIX 1: Change 'src' to 'gql' (or './gql') to match your folder structure
  documents: ['./gql/**/*.graphql'],

  ignoreNoDocuments: true, // This was hiding the error that no files were found
  generates: {
    './gql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        reactQueryVersion: 5,

        // FIX 2: Fix the fetcher path.
        // Your generated file is in ./gql/generated.ts
        // Your fetcher is in ./lib/graphql-client.ts
        // Use a relative path so it works easily in the monorepo:
        fetcher: {
          func: '../lib/graphql-client#fetcher',
          isReactHook: false,
        },

        exposeQueryKeys: true,
        exposeFetcher: true,
        addInfiniteQuery: true,
        withHooks: true,
      },
    },
  },
};

export default config;
