import { Field, InputType } from '@nestjs/graphql';
import { IUserType } from '../users.model';

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  password: string;
  @Field()
  email: string;
  @Field()
  phoneNumber: string;
  @Field()
  imageUrl: string;
  @Field()
  userType: IUserType;
}
