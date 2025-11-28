// src/graphql/builder.ts
import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import { DateTimeResolver } from 'graphql-scalars';

import { prisma } from '@/lib/prisma';

// ✅ Define Scalars as a type that includes an index signature
type CustomScalars = {
  DateTime: {
    Input: string | Date;
    Output: string;
  };
} & {
  // This index signature satisfies Pothos's Record constraint
  [key: string]: { Input: unknown; Output: unknown };
};

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Scalars: CustomScalars;
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});

builder.addScalarType('DateTime', DateTimeResolver);

builder.queryType({
  fields: (t) => ({
    ok: t.boolean({ resolve: () => true }),
  }),
});
