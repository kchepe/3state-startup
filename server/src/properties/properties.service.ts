import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePropertyDTO } from './dto/add-properties-dto';

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
}
