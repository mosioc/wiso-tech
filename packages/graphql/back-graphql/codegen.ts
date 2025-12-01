// codegen.ts (Fully Self-Contained Backend Configuration)

import type { CodegenConfig } from '@graphql-codegen/cli';

// Define the scalars that were previously in getBaseConfig
const sharedScalars = {
  DateTime: 'string', // Maps the GraphQL 'DateTime' scalar to the TypeScript 'string' type
  Date: 'string', // Maps the GraphQL 'Date' scalar to the TypeScript 'string' type
  // Add other custom scalars here if you have them (e.g., JSON, UUID)
};

const config: CodegenConfig = {
  // 1. Global Configuration
  config: {
    // Incorporate the shared scalar mappings
    scalars: sharedScalars,
  },

  // 2. Where to find the GraphQL Schema
  // This points to the file where your Pothos schema builder is initialized and exported.
  schema: './graphql/schema.ts',

  // 3. Document Configuration
  // Since this is a backend resolver config, we ignore document files.
  documents: [],
  ignoreNoDocuments: true, // Prevents errors if no documents are found

  // 4. Output Configuration
  generates: {
    // The target output path for the generated types
    './src/generated/graphql.ts': {
      // Plugins to use: 'typescript' for base types, 'typescript-resolvers' for resolver types
      plugins: ['typescript', 'typescript-resolvers'],

      // Plugin-specific configuration (combined with the global 'scalars' config)
      config: {
        useIndexSignature: true,
        // Any other backend-specific config (like type mappings for Prisma models)
        // would go here if not handled by your Pothos setup.

        // Example if needed:
        // contextType: '../path/to/context#ContextType',
      },
    },
  },

  // 5. Schema Processing
  // CRITICAL: Required to process the schema.ts file and extract the schema
  require: ['ts-node/register'],
};

export default config;
