import { Module } from '@nestjs/common';
import { ProvincesService } from './provinces.service';
import { ProvincesResolver } from './provinces.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [ProvincesService, ProvincesResolver],
  imports: [PrismaModule],
})
export class ProvincesModule {}
