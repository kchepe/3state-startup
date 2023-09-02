import { gql } from '@apollo/client';

const GET_AMENITIES = gql`
query Amenities {
   amenities {
    id
    categoryName
    amenities{
      id 
      name
    }
  }
}`;

export default GET_AMENITIES;
