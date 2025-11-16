import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Get all templates
export async function GET() {
  try {
    const user = await prisma.user.findFirst({
      where: { name: 'Bartek' },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const templates = await prisma.template.findMany({
      where: { userId: user.id },
      include: {
        templateExercises: {
          orderBy: { order: 'asc' },
        },
      },
      orderBy: { createdAt: 'asc' },
    });

    return NextResponse.json(templates);
  } catch (error) {
    console.error('Error fetching templates:', error);
    return NextResponse.json({ error: 'Failed to fetch templates' }, { status: 500 });
  }
}

// Create a new template
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, icon, recurrence, dayOfWeek, exercises } = body;

    const user = await prisma.user.findFirst({
      where: { name: 'Bartek' },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const template = await prisma.template.create({
      data: {
        userId: user.id,
        name,
        icon: icon || '💪',
        recurrence: recurrence || 'weekly',
        dayOfWeek: parseInt(dayOfWeek),
        templateExercises: {
          create: exercises.map((exercise: string, index: number) => ({
            name: exercise,
            order: index,
          })),
        },
      },
      include: {
        templateExercises: true,
      },
    });

    return NextResponse.json(template);
  } catch (error) {
    console.error('Error creating template:', error);
    return NextResponse.json({ error: 'Failed to create template' }, { status: 500 });
  }
}

// Delete a template
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Template ID required' }, { status: 400 });
    }

    await prisma.template.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting template:', error);
    return NextResponse.json({ error: 'Failed to delete template' }, { status: 500 });
  }
}
