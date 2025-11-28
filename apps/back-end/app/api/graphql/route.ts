import { createYoga } from 'graphql-yoga';
import { NextRequest } from 'next/server';

import { schema } from '@/graphql/schema';

// 1. Create Yoga Instance
const yoga = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',

  // ✅ FIX: Use the global standard Request/Response, NOT NextRequest/NextResponse
  // This satisfies Yoga's internal type requirements.
  fetchAPI: { Request, Response },

  cors: {
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders: ['X-Custom-Header', 'Content-Type'],
    methods: ['POST', 'GET', 'OPTIONS'],
  },
});

// 2. Define the Context type for Next.js 15/16
interface NextContext {
  params: Promise<Record<string, string>>;
}

// 3. Export Wrappers
// We use 'NextRequest' here to satisfy Next.js Route Handler types.
// We cast context to 'any' when passing to yoga to bypass strict context matching.

export async function GET(request: NextRequest, context: NextContext) {
  return yoga.handleRequest(request, context as never);
}

export async function POST(request: NextRequest, context: NextContext) {
  return yoga.handleRequest(request, context as never);
}

export async function OPTIONS(request: NextRequest, context: NextContext) {
  return yoga.handleRequest(request, context as never);
}
