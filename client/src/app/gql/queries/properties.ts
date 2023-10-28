import { gql } from '@apollo/client';

const GET_PROPERTIES_BY_USER_ID = gql`
  query GetPropertiesByUserId($userId: String!) {
    getPropertiesByUserId(userId: $userId) {
      id
      address
      amenities
      images
      balcony
      barangay
      bathroom
      bedroom
      city
      description
      floorAreaInSqm
      furnishing
      housingMethod
      latitude
      longitude
      lotAreaInSqm
      parkingSpace
      price
      province
      title
      type
      zipCode
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { GET_PROPERTIES_BY_USER_ID };
