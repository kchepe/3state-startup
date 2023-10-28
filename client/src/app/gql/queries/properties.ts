import { gql } from '@apollo/client';

const propertyDetails = `
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
`;

const GET_PROPERTY_BY_ID = gql`
  query GetPropertyById($propertyId: String!) {
    getPropertyById(propertyId: $propertyId) {
      ${propertyDetails}
      user {
        id
        email
        phoneNumber
        firstName
        lastName
        imageUrl
      }
    }
  }
`;

const GET_PROPERTIES_BY_USER_ID = gql`
  query GetPropertiesByUserId($userId: String!) {
    getPropertiesByUserId(userId: $userId) {
      properties {
        ${propertyDetails}
      }
      totalCount
    }
  }
`;

const GET_ALL_PROPERTIES = gql`
  query GetAllProperties {
    getAllProperties {
      properties {
        ${propertyDetails}
      }
      totalCount
    }
  }
`;

export { GET_PROPERTIES_BY_USER_ID, GET_ALL_PROPERTIES, GET_PROPERTY_BY_ID };
