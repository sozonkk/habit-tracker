import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Calculate 1RM using Brzycki formula
function calculate1RM(weight: number, reps: number): number {
  if (reps === 1) return weight;
  return Math.round(weight * (36 / (37 - reps)));
}

// Get all personal records
export async function GET() {
  try {
    const user = await prisma.user.findFirst({
      where: { name: 'Bartek' },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const records = await prisma.personalRecord.findMany({
      where: { userId: user.id },
      orderBy: { date: 'desc' },
    });

    return NextResponse.json(records);
  } catch (error) {
    console.error('Error fetching records:', error);
    return NextResponse.json({ error: 'Failed to fetch records' }, { status: 500 });
  }
}

// Update or create a personal record
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { exercise, weight, reps, date } = body;

    const user = await prisma.user.findFirst({
      where: { name: 'Bartek' },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const oneRM = calculate1RM(parseFloat(weight), parseInt(reps));

    const record = await prisma.personalRecord.upsert({
      where: {
        userId_exercise: {
          userId: user.id,
          exercise,
        },
      },
      update: {
        weight: parseFloat(weight),
        reps: parseInt(reps),
        oneRM,
        date: date ? new Date(date) : new Date(),
      },
      create: {
        userId: user.id,
        exercise,
        weight: parseFloat(weight),
        reps: parseInt(reps),
        oneRM,
        date: date ? new Date(date) : new Date(),
      },
    });

    return NextResponse.json(record);
  } catch (error) {
    console.error('Error updating record:', error);
    return NextResponse.json({ error: 'Failed to update record' }, { status: 500 });
  }
}
