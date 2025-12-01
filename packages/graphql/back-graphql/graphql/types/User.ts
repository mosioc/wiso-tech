import { prisma } from '@repo/prisma-config';
import bcrypt from 'bcryptjs';

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
const SignupInput = builder.inputType('SignupInput', {
  fields: (t) => ({
    email: t.string({ required: true }),
    password: t.string({ required: true }),
    username: t.string({ required: true }),
    userType: t.field({ type: UserType, required: true }),
    yearsOfExperience: t.int({ required: true }),
    expertise: t.stringList({ required: true }),
    profilePhoto: t.string({ required: true }),
  }),
});

// 4. Query: 'users' (instead of 'me')
builder.queryField('users', (t) =>
  t.prismaField({
    type: ['User'],
    resolve: (query) => prisma.user.findMany({ ...query }),
  })
);

// 5. Mutation using Input Object
builder.mutationField('signup', (t) =>
  t.prismaField({
    type: 'User',
    args: {
      input: t.arg({ type: SignupInput, required: true }),
    },
    resolve: async (query, _parent, { input }) => {
      const existingUser = await prisma.user.findUnique({
        where: { email: input.email },
      });

      if (existingUser) {
        throw new Error('User already exists');
      }

      const hashedPassword = await bcrypt.hash(input.password, 10);

      return prisma.user.create({
        ...query,
        data: {
          email: input.email,
          password: hashedPassword,
          username: input.username,
          userType: input.userType,
          yearsOfExperience: input.yearsOfExperience,
          expertise: input.expertise,
          profilePhoto: input.profilePhoto,
        },
      });
    },
  })
);
