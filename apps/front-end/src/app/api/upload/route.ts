// app/api/upload/route.ts
import { pinata } from '@shared/components/lib/PianataConfig';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file = data.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const uploadData = await pinata.upload.public.file(file);

    // 1. Construct the URL using your gateway domain
    // Make sure NEXT_PUBLIC_GATEWAY_URL is in your .env file
    // Example: purple-monkey.mypinata.cloud
    const url = `https://${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${uploadData.cid}`;

    // 2. Return the full URL to the client
    return NextResponse.json(url, { status: 200 });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error uploading file to Pinata:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
