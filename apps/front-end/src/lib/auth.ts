// auth.ts
import { prisma } from '@repo/prisma-config';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),

  emailAndPassword: {
    enabled: true,
  },
  user: {
    // Define your custom fields here so Better Auth accepts them during sign-up
    additionalFields: {
      username: {
        type: 'string',
        required: true,
      },
      profilePhoto: {
        type: 'string',
        required: true, // or false if optional
      },
      yearsOfExperience: {
        type: 'number',
        required: true,
      },
      expertise: {
        type: 'string[]', // Arrays are often passed as JSON or handled specifically, but basic string input is safest for now
        required: true,
      },
      userType: {
        type: 'string', // Enum values are passed as strings
        required: true,
      },
    },
  },
});
