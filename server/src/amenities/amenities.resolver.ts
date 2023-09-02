import { Query, Resolver } from '@nestjs/graphql';
import { AmenitiesService } from './amenities.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AmenitiesResponseType } from './amenities.model';

@Resolver()
@UseGuards(JwtAuthGuard)
export class AmenitiesResolver {
  constructor(private readonly amenitiesService: AmenitiesService) {}

  @Query(() => [AmenitiesResponseType])
  async amenities() {
    return this.amenitiesService.getAllAmenitiesWithCategory();
  }
}
