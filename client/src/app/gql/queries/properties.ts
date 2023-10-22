import { gql } from '@apollo/client';

const GET_PROPERTIES_BY_CURRENT_USER = gql`
  query GetPropertiesByCurrentUser {
    getPropertiesByCurrentUser {
      id
      address
      amenities
      images
      balcony
      barangay
      bathroom
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
export { GET_PROPERTIES_BY_CURRENT_USER };
