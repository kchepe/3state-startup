import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePropertyDTO } from './dto/add-properties-dto';
import { getS3SignedUrl } from 'src/utils/s3Util';

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

  public async getPropertyByUserId(id: string) {
    const user = await this.prisma.users.findFirst({
      where: { id },
      include: {
        properties: true,
      },
    });
    const { properties, ...userDetails } = user;

    const newPropertiesResult = await Promise.all(
      properties.map(async (property) => {
        const propertyCopy = { ...property };
        const imageUrls = await Promise.all(
          propertyCopy.images.map(async (image) => {
            const imageUrl = await getS3SignedUrl('3state-development', image);
            return imageUrl;
          }),
        );
        propertyCopy.images = imageUrls;
        return propertyCopy;
      }),
    );

    return { ...userDetails, properties: newPropertiesResult };
  }
}
