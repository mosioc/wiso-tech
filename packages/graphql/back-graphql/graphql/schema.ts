// graphql/schema.ts
import { builder } from './builder';
import './types/User';

// This triggers the build
export const schema = builder.toSchema();
