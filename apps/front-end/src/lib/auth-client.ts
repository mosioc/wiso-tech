// auth-client.ts
import { inferAdditionalFields } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';

import type { auth } from '@/lib/auth'; // Import the TYPE of your auth instance

export const authClient = createAuthClient({
  baseURL: 'http://localhost:3000',
  plugins: [
    inferAdditionalFields<typeof auth>(), // Generic infers types from server config
  ],
});

export const { signIn, signUp, useSession } = authClient;
