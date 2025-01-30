import { type NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/lib/database';
import { Game } from '@/lib/models';

const POST = async (request: NextRequest) => {
  await connectDB();

  const payload = await request.json();

  try {
    const response = await Game.create(payload);

    return NextResponse.json(response);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    } else {
      return NextResponse.json({ error: 'An unknown error occurred' });
    }
  }
};

const GET = async () => {
  await connectDB();

  try {
    const response = await Game.find({});

    return NextResponse.json(response);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    } else {
      return NextResponse.json({ error: 'An unknown error occurred' });
    }
  }
};

export { GET, POST };
