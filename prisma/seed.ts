import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Create or update default user
  const user = await prisma.user.upsert({
    where: { email: 'bartek@example.com' },
    update: {},
    create: {
      name: 'Bartek',
      email: 'bartek@example.com',
      streak: 5,
    },
  });

  console.log('✅ Created user:', user.name);

  // Create templates
  const template1 = await prisma.template.create({
    data: {
      userId: user.id,
      name: 'Dzień Pchający',
      icon: '💪',
      recurrence: 'weekly',
      dayOfWeek: 1, // Monday
      templateExercises: {
        create: [
          { name: 'Wyciskanie Sztangi', order: 0 },
          { name: 'Wyciskanie Nad Głowę', order: 1 },
          { name: 'Pompki na Poręczach', order: 2 },
          { name: 'Prostowanie Ramion', order: 3 },
        ],
      },
    },
  });

  const template2 = await prisma.template.create({
    data: {
      userId: user.id,
      name: 'Dzień Ciągnący',
      icon: '🏋️',
      recurrence: 'weekly',
      dayOfWeek: 3, // Wednesday
      templateExercises: {
        create: [
          { name: 'Martwy Ciąg', order: 0 },
          { name: 'Wiosłowanie Sztangą', order: 1 },
          { name: 'Podciąganie', order: 2 },
          { name: 'Uginanie Ramion', order: 3 },
        ],
      },
    },
  });

  const template3 = await prisma.template.create({
    data: {
      userId: user.id,
      name: 'Nogi',
      icon: '🦵',
      recurrence: 'weekly',
      dayOfWeek: 5, // Friday
      templateExercises: {
        create: [
          { name: 'Przysiady', order: 0 },
          { name: 'Leg Press', order: 1 },
          { name: 'Martwy Ciąg Rumuński', order: 2 },
        ],
      },
    },
  });

  console.log('✅ Created 3 templates');

  // Create personal records
  await prisma.personalRecord.create({
    data: {
      userId: user.id,
      exercise: 'Przysiady',
      weight: 100,
      reps: 8,
      oneRM: 125,
      date: new Date('2024-11-15'),
    },
  });

  await prisma.personalRecord.create({
    data: {
      userId: user.id,
      exercise: 'Wyciskanie Sztangi',
      weight: 80,
      reps: 6,
      oneRM: 95,
      date: new Date('2024-11-14'),
    },
  });

  await prisma.personalRecord.create({
    data: {
      userId: user.id,
      exercise: 'Martwy Ciąg',
      weight: 120,
      reps: 5,
      oneRM: 140,
      date: new Date('2024-11-13'),
    },
  });

  console.log('✅ Created personal records');

  // Create sample workout
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  await prisma.workout.create({
    data: {
      userId: user.id,
      date: yesterday,
      notes: 'Świetny trening!',
      exercises: {
        create: [
          {
            name: 'Przysiady',
            order: 0,
            sets: {
              create: [
                { reps: 10, weight: 60, order: 0 },
                { reps: 8, weight: 80, order: 1 },
                { reps: 6, weight: 100, order: 2 },
              ],
            },
          },
          {
            name: 'Wyciskanie Sztangi',
            order: 1,
            sets: {
              create: [
                { reps: 10, weight: 60, order: 0 },
                { reps: 8, weight: 70, order: 1 },
                { reps: 6, weight: 80, order: 2 },
              ],
            },
          },
        ],
      },
    },
  });

  console.log('✅ Created sample workout');
  console.log('🎉 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
