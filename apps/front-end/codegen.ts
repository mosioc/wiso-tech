import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  // Point to your running local server
  schema: 'http://localhost:3001/api/graphql',
  // Look for queries in all ts/tsx files
  documents: ['src/**/*.{ts,tsx}'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      preset: 'client', // This is the modern, magic preset
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
};

export default config;
