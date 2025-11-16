import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const user = await prisma.user.findFirst({
      where: { name: 'Bartek' },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Get workout count for current week
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay() + 1); // Monday
    startOfWeek.setHours(0, 0, 0, 0);

    const workoutsThisWeek = await prisma.workout.count({
      where: {
        userId: user.id,
        date: {
          gte: startOfWeek,
        },
      },
    });

    // Get total workouts
    const totalWorkouts = await prisma.workout.count({
      where: { userId: user.id },
    });

    // Get personal records
    const personalRecords = await prisma.personalRecord.findMany({
      where: { userId: user.id },
      orderBy: { date: 'desc' },
    });

    // Calculate total volume this week
    const workoutsWithVolume = await prisma.workout.findMany({
      where: {
        userId: user.id,
        date: {
          gte: startOfWeek,
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

    let totalVolume = 0;
    workoutsWithVolume.forEach((workout) => {
      workout.exercises.forEach((exercise) => {
        exercise.sets.forEach((set) => {
          totalVolume += set.reps * set.weight;
        });
      });
    });

    return NextResponse.json({
      user,
      workoutsThisWeek,
      totalWorkouts,
      totalVolume,
      personalRecords,
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
