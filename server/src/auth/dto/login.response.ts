import { Field, ID, ObjectType } from '@nestjs/graphql';

export type IUserType =
  | 'broker'
  | 'owner'
  | 'agent'
  | 'developer'
  | 'brokerage';

@ObjectType()
export class UserResponse {
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
  @Field()
  userType: IUserType;
}

@ObjectType()
export class LoginResponse {
  @Field()
  token: string;
  @Field()
  user: UserResponse;
}
