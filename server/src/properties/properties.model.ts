import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/users.model';

export type PropertyStatusType = 'forSale' | 'forRent' | 'occupied' | 'sold';

@ObjectType()
export class Property {
  @Field(() => ID)
  id: string;
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
  bedroom: number;
  @Field()
  city: string;
  @Field()
  description: string;
  @Field()
  floorAreaInSqm: number;
  @Field()
  furnishing: string;
  @Field()
  status: PropertyStatusType;
  @Field()
  latitude: string;
  @Field()
  longitude: string;
  @Field()
  lotAreaInSqm: string;
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

@ObjectType()
export class PropertiesWithTotalCountResponse {
  @Field(() => [Property])
  properties: Property[];
  @Field()
  totalCount: number;
}

@ObjectType()
export class PropertyWithUserResponse extends Property {
  @Field(() => User)
  user: User;
}

@ObjectType()
export class CreatePropertiesResponse {
  @Field()
  id: string;
}
