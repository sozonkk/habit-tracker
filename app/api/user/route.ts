import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Get or create user (for now, we'll use a single user - "Bartek")
export async function GET() {
  try {
    let user = await prisma.user.findFirst({
      where: { name: 'Bartek' },
    });

    if (!user) {
      // Create default user if doesn't exist
      user = await prisma.user.create({
        data: {
          name: 'Bartek',
          streak: 0,
        },
      });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
  }
}

// Update user (e.g., streak)
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { streak } = body;

    let user = await prisma.user.findFirst({
      where: { name: 'Bartek' },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    user = await prisma.user.update({
      where: { id: user.id },
      data: { streak },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}
