import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IUserType } from 'src/users/users.model';

@InputType()
export class SignupInput {
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

@ObjectType()
class UserData {
  @Field()
  id: string;
  @Field()
  email: string;
  @Field()
  password: string;
}

@ObjectType()
export class SignupResponse {
  @Field()
  success: boolean;
  @Field()
  message: string;
  @Field({ nullable: true })
  data: UserData;
}
