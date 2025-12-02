// graphql/builder.ts
import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import { prisma } from '@repo/prisma-config';
import { DateTimeResolver } from 'graphql-scalars';

type CustomScalars = {
  DateTime: {
    // Prisma returns Date; inputs can be Date or ISO string depending on your API
    Input: Date | string;
    Output: Date;
  };
};

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Scalars: CustomScalars;
}>({
  plugins: [PrismaPlugin],
  prisma: { client: prisma },
});

// Register DateTime scalar (it will serialize Date to ISO string)
builder.addScalarType('DateTime', DateTimeResolver);

// Root types (defined once)
builder.queryType({
  fields: (t) => ({
    ok: t.boolean({ resolve: () => true }),
  }),
});
