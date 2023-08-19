import { gql } from '@apollo/client';

const GET_CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      id
      firstName
      lastName
      password
      email
      phoneNumber
    }
  }
`;

export default GET_CURRENT_USER;
