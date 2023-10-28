import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PropertiesService } from './properties.service';
import {
  CreatePropertiesResponse,
  PropertiesWithTotalCountResponse,
  PropertyWithUserResponse,
} from './properties.model';
import { CreatePropertyDTO } from './dto/add-properties-dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver()
export class PropertiesResolver {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Mutation(() => CreatePropertiesResponse)
  @UseGuards(JwtAuthGuard)
  async createProperty(@Args('newProperty') newProperty: CreatePropertyDTO) {
    return this.propertiesService.createProperty(newProperty);
  }

  @Query(() => PropertiesWithTotalCountResponse)
  async getPropertiesByUserId(@Args('userId') userId: string) {
    return this.propertiesService.getPropertiesByUserId(userId);
  }
  @Query(() => PropertiesWithTotalCountResponse)
  async getAllProperties() {
    return this.propertiesService.getAllProperties();
  }
  @Query(() => PropertyWithUserResponse)
  async getPropertyById(@Args('propertyId') propertyId: string) {
    return this.propertiesService.getPropertyById(propertyId);
  }
}
