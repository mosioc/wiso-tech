// prisma.config.ts
import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: env('DATABASE_URL'), // ← this is the new place for the URL
  },
  migrations: {
    path: 'prisma/migrations',
  },
});
