import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Properties {
  @Field(() => ID)
  id: string;
  @Field()
  address: string;
  @Field(() => [String])
  amenities: string[];
  @Field()
  balcony: boolean;
  @Field()
  barangay: string;
  @Field()
  bathroom: number;
  @Field()
  city: string;
  @Field()
  description: string;
  @Field()
  floorAreaInSqm: number;
  @Field()
  furnishing: string;
  @Field()
  housingMethod: string;
  @Field()
  latitude: string;
  @Field()
  longitude: string;
  @Field()
  lotAreaInSqm: string;
  @Field()
  parkingSpaces: number;
  @Field()
  price: string;
  @Field()
  province: string;
  @Field()
  title: string;
  @Field()
  type: string;
  @Field()
  zipCode: string;
}

@ObjectType()
export class CreatePropertiesResponse {
  @Field()
  id: string;
}
