import * as fs from 'fs'; // Import the file system module

import { getBaseConfig, type CodegenConfig } from '@repo/graphql-config';

const config: CodegenConfig = {
  ...getBaseConfig(),
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
  hooks: {
    // The function must return void, not a string
    afterOneFileWrite: (filePath: string) => {
      // Check if this is the specific file we want to modify
      if (filePath.endsWith('fragment-masking.ts')) {
        // 1. Read the generated file
        const content = fs.readFileSync(filePath, 'utf-8');

        // 2. Replace the import path
        const newContent = content.replace(
          "from 'graphql'",
          "from '@repo/graphql-config'"
        );

        // 3. Write the changes back to disk
        fs.writeFileSync(filePath, newContent);
      }
    },
  },
};

export default config;
