import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
class City {
  @Field(() => ID)
  id: string;
  @Field()
  cityCode: string;
  @Field()
  cityName: string;
  @Field(() => [Barangay])
  barangays: Barangay[];
}

@ObjectType()
class Barangay {
  @Field(() => ID)
  id: string;
  @Field()
  brgyCode: string;
  @Field()
  brgyName: string;
}

@ObjectType()
export class ProvincesResponseType {
  @Field(() => ID)
  id: string;
  @Field()
  provinceName: string;
  @Field()
  provinceCode: string;
  @Field(() => [City])
  cities: City[];
}
