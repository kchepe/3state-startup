import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { from } from '@apollo/client';
import errorLink from './errorLink';
import httpLink from './httpLink';
import authLink from './authLink';

const { getClient: getAuthClient } = registerApolloClient(
  () =>
    new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link: from([
        errorLink,
        authLink.concat(httpLink('http://host.docker.internal:3000/graphql')),
      ]),
    }),
);

export default getAuthClient;
