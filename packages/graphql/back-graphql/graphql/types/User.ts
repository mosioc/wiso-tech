import { prisma } from '@repo/prisma-config';

import { builder } from '../builder';

// 1. Define Enum
export const UserType = builder.enumType('UserType', {
  values: ['LEARNER', 'MENTOR'] as const,
});

// 2. Define Object Type
builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email'),
    username: t.exposeString('username'),
    yearsOfExperience: t.exposeInt('yearsOfExperience'),
    expertise: t.exposeStringList('expertise'),
    profilePhoto: t.exposeString('profilePhoto'),
    userType: t.expose('userType', { type: UserType }),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
  }),
});

// 3. Define Input Object (Best Practice)

// 4. Query: 'users' (instead of 'me')
builder.queryField('users', (t) =>
  t.prismaField({
    type: ['User'],
    resolve: (query) => prisma.user.findMany({ ...query }),
  })
);

// 5. Mutation using Input Object
