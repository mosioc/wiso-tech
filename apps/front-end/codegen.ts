import { type CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3001/api/graphql',
  documents: ['src/**/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        // React Query V5 settings
        reactQueryVersion: 5,

        // This maps to your custom fetcher
        fetcher: {
          func: '@/lib/graphql-client#fetcher',
          isReactHook: false,
        },

        // Expose query keys for better control
        exposeQueryKeys: true,
        exposeFetcher: true,

        // Add these for proper v5 support
        addInfiniteQuery: true,
      },
    },
  },
};

export default config;
