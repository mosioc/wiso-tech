// src/graphql/types/User.ts
import { builder } from '../builder';

import { prisma } from '@/lib/prisma';

// Define the User type based on the Prisma Model
const UserType = builder.enumType('UserType', {
  values: ['LEARNER', 'MENTOR'] as const, // adjust to match your Prisma enum values
});

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email'),
    username: t.exposeString('username'),
    yearsOfExperience: t.exposeInt('yearsOfExperience'),
    expertise: t.exposeStringList('expertise'),
    profilePhoto: t.exposeString('profilePhoto'),
    userType: t.field({
      type: UserType,
      resolve: (user) => user.userType,
    }),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
  }),
});

// Add a Query to get users
builder.queryField('users', (t) =>
  t.prismaField({
    type: ['User'],
    resolve: (query) => prisma.user.findMany({ ...query }),
  })
);
