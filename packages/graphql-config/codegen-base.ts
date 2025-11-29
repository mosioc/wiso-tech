import type { CodegenConfig } from '@graphql-codegen/cli';

// Define shared scalar mappings here so Front and Back use the same types
const sharedScalars = {
  DateTime: 'string',
  Date: 'string',
  // Add other custom scalars here
};

export const getBaseConfig = (): CodegenConfig => ({
  schema: [], // To be overridden
  documents: [], // To be overridden
  ignoreNoDocuments: true,
  generates: {},
  config: {
    scalars: sharedScalars,
  },
});

export { sharedScalars };
