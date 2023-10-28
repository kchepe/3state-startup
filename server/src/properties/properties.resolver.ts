import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PropertiesService } from './properties.service';
import { CreatePropertiesResponse, Property } from './properties.model';
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

  @Query(() => [Property])
  async getPropertiesByUserId(@Args('userId') userId: string) {
    return this.propertiesService.getPropertiesByUserId(userId);
  }
  @Query(() => [Property])
  async getAllProperties() {
    return this.propertiesService.getAllProperties();
  }
}
