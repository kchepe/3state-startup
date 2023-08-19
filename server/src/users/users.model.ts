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
export class UserTypes implements Users {
  @Field(() => ID)
  id: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  password: string;
  @Field()
  email: string;
  @Field()
  imageUrl: string;
  @Field()
  phoneNumber: string;
  @Field(() => AllowedUserType)
  userType: IUserType;
}
