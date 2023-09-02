import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
class Amenities {
  @Field(() => ID)
  id: string;
  @Field()
  name: string;
}

@ObjectType()
export class AmenitiesResponseType {
  @Field(() => ID)
  id: string;
  @Field()
  categoryName: string;
  @Field(() => [Amenities])
  amenities: Amenities[];
}
