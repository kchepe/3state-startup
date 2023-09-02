import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AmenitiesService {
  constructor(private readonly prisma: PrismaService) {}

  public async getAllAmenitiesWithCategory() {
    const categories = await this.getAmenitiyCategories();
    const finalData = [];
    for (const category of categories) {
      const amenities = await this.getAmenities(category.id);
      finalData.push({ ...category, amenities });
    }
    return finalData;
  }

  private async getAmenitiyCategories() {
    const response = await this.prisma.amenityCategories.findMany();
    return response;
  }

  private async getAmenities(categoryId: string) {
    const response = await this.prisma.amenities.findMany({
      select: {
        id: true,
        name: true,
      },
      where: {
        categoryId,
      },
    });
    return response;
  }
}
