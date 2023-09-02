import { Module } from '@nestjs/common';
import { AmenitiesResolver } from './amenities.resolver';
import { AmenitiesService } from './amenities.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [AmenitiesResolver, AmenitiesService],
  imports: [PrismaModule],
})
export class AmenitiesModule {}
