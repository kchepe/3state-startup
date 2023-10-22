import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AllowedUserType, IUserType } from 'src/users/users.model';

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
export class UserWithProperties {
  @Field(() => ID)
  id: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  email: string;
  @Field()
  imageUrl: string;
  @Field()
  phoneNumber: string;
  @Field(() => AllowedUserType)
  userType: IUserType;
  @Field(() => [Property])
  properties: Property[];
}

@ObjectType()
export class CreatePropertiesResponse {
  @Field()
  id: string;
}
