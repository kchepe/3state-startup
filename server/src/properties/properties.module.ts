import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesResolver } from './properties.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [PropertiesService, PropertiesResolver],
  imports: [PrismaModule],
})
export class PropertiesModule {}
