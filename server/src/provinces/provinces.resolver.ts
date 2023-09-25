import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ProvincesService } from './provinces.service';
import { ProvincesResponseType } from './provinces.model';

@Resolver()
@UseGuards(JwtAuthGuard)
export class ProvincesResolver {
  constructor(private readonly provincesService: ProvincesService) {}

  @Query(() => [ProvincesResponseType])
  async provinces() {
    return this.provincesService.getProvinces();
  }
}
