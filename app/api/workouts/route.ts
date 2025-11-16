import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Get all workouts with exercises and sets
export async function GET() {
  try {
    const user = await prisma.user.findFirst({
      where: { name: 'Bartek' },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const workouts = await prisma.workout.findMany({
      where: { userId: user.id },
      include: {
        exercises: {
          include: {
            sets: {
              orderBy: { order: 'asc' },
            },
          },
          orderBy: { order: 'asc' },
        },
      },
      orderBy: { date: 'desc' },
      take: 50, // Last 50 workouts
    });

    return NextResponse.json(workouts);
  } catch (error) {
    console.error('Error fetching workouts:', error);
    return NextResponse.json({ error: 'Failed to fetch workouts' }, { status: 500 });
  }
}

// Create a new workout
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { date, notes, exercises } = body;

    const user = await prisma.user.findFirst({
      where: { name: 'Bartek' },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const workout = await prisma.workout.create({
      data: {
        userId: user.id,
        date: date ? new Date(date) : new Date(),
        notes,
        exercises: {
          create: exercises.map((exercise: any, exIndex: number) => ({
            name: exercise.name,
            notes: exercise.notes,
            order: exIndex,
            sets: {
              create: exercise.sets.map((set: any, setIndex: number) => ({
                reps: parseInt(set.reps),
                weight: parseFloat(set.weight),
                order: setIndex,
              })),
            },
          })),
        },
      },
      include: {
        exercises: {
          include: {
            sets: true,
          },
        },
      },
    });

    return NextResponse.json(workout);
  } catch (error) {
    console.error('Error creating workout:', error);
    return NextResponse.json({ error: 'Failed to create workout' }, { status: 500 });
  }
}
