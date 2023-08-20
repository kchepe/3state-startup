import { HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_ENDPOINT,
  credentials: 'same-origin',
});

export default httpLink;
