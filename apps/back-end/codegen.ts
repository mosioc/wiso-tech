import { getBaseConfig, type CodegenConfig } from '@repo/graphql-config';

const config: CodegenConfig = {
  ...getBaseConfig(),
  // Backend specific: It generates the SDL from your Pothos code or specific file
  schema: 'http://localhost:3001/api/graphql',
  generates: {
    './src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        useIndexSignature: true,
        // Backend specific config
      },
    },
  },
};

export default config;
