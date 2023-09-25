import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProvincesService {
  constructor(private readonly prisma: PrismaService) {}

  public async getProvinces() {
    const response = await this.prisma.provinces.findMany({
      include: {
        cities: {
          include: {
            barangays: true,
          },
        },
      },
    });
    return response;
  }
}
