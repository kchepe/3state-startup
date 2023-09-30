import { gql } from '@apollo/client';

const ADD_PROPERTY = gql`
  mutation CreateProperty($newProperty: CreatePropertyDTO!) {
    createProperty(newProperty: $newProperty) {
      id
    }
  }
`;

export default ADD_PROPERTY;
