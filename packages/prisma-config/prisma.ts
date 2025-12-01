// packages/prisma-config/src/lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// Fix: Disable the 'no-process-env' rule for this line
// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
