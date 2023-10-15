import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePropertyDTO {
  @Field()
  userId: string;
  @Field()
  address: string;
  @Field(() => [String])
  amenities: string[];
  @Field(() => [String])
  images: string[];
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
  lotAreaInSqm: number;
  @Field()
  parkingSpace: number;
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
