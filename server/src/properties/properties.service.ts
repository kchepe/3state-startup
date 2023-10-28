import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePropertyDTO } from './dto/add-properties-dto';
import { getImageUrl, getS3SignedUrl } from 'src/utils/s3Util';
import { Properties } from '@prisma/client';

@Injectable()
export class PropertiesService {
  constructor(private readonly prisma: PrismaService) {}

  public async createProperty(newProperty: CreatePropertyDTO) {
    const property = await this.prisma.properties.create({
      data: newProperty,
    });

    return {
      id: property.id,
    };
  }

  public async getPropertiesByUserId(userId: string) {
    const properties = await this.prisma.properties.findMany({
      where: { userId },
      orderBy: {
        updatedAt: 'desc',
      },
    });
    const totalCount = await this.prisma.properties.count();
    const newPropertiesData = await this.getFinalPropertyData(properties);
    return { properties: newPropertiesData, totalCount };
  }
  public async getAllProperties() {
    const properties = await this.prisma.properties.findMany({
      orderBy: { updatedAt: 'desc' },
    });
    const totalCount = await this.prisma.properties.count();
    const newPropertiesData = await this.getFinalPropertyData(properties);
    return { properties: newPropertiesData, totalCount };
  }

  public async getPropertyById(propertyId: string) {
    const property = await this.prisma.properties.findUnique({
      where: {
        id: propertyId,
      },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phoneNumber: true,
            imageUrl: true,
          },
        },
      },
    });
    const propertyCopy = { ...property };
    const newPropertyImages = await Promise.all(
      property.images.map(async (image) => {
        const imageUrl = await getImageUrl(image);
        return imageUrl;
      }),
    );
    propertyCopy.images = newPropertyImages;
    return propertyCopy;
  }

  private async getFinalPropertyData(properties: Properties[]) {
    const newPropertiesResult = await Promise.all(
      properties.map(async (property) => {
        const propertyCopy = { ...property };
        const imageUrls = await Promise.all(
          propertyCopy.images.map(async (image) => {
            const imageUrl = await getImageUrl(image);
            return imageUrl;
          }),
        );
        propertyCopy.images = imageUrls;
        return propertyCopy;
      }),
    );
    return newPropertiesResult;
  }
}
