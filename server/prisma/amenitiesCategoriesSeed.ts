import { AmenityCategoryEnum, PrismaClient } from '@prisma/client';

const amenityCategories: { categoryName: AmenityCategoryEnum }[] = [
  { categoryName: 'outdoor' },
  { categoryName: 'indoor' },
  { categoryName: 'security' },
];

const prisma = new PrismaClient();

async function main() {
  for (const category of amenityCategories) {
    await prisma.amenityCategories.create({
      data: category,
    });
  }
}

main()
  .catch(() => {
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
