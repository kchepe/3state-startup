import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PropertiesService } from './properties.service';
import { CreatePropertiesResponse } from './properties.model';
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
}