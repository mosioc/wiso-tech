import { getBaseConfig, type CodegenConfig } from '@repo/graphql-config';

const config: CodegenConfig = {
  ...getBaseConfig(),
  // Frontend inspects the backend URL or a local schema file
  schema: 'http://localhost:3001/api/graphql',
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/gql/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
};

export default config;
