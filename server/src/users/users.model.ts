import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Users } from '@prisma/client';

export enum AllowedUserType {
  broker,
  owner,
  agent,
  developer,
  brokerage,
}

registerEnumType(AllowedUserType, {
  name: 'AllowedUserType',
});

export type IUserType =
  | 'broker'
  | 'owner'
  | 'agent'
  | 'developer'
  | 'brokerage';

@ObjectType()
export class User {
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
export class UserTypes extends User implements Users {
  @Field()
  password: string;
}
