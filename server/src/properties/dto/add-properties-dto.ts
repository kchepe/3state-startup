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
  @Field({ nullable: true })
  balcony: boolean;
  @Field()
  barangay: string;
  @Field({ nullable: true })
  bathroom: number;
  @Field({ nullable: true })
  bedroom: number;
  @Field()
  city: string;
  @Field()
  description: string;
  @Field()
  floorAreaInSqm: number;
  @Field({ nullable: true })
  furnishing: string;
  @Field()
  status: 'forSale' | 'forRent' | 'occupied' | 'sold';
  @Field()
  latitude: string;
  @Field()
  longitude: string;
  @Field()
  lotAreaInSqm: number;
  @Field({ nullable: true })
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
