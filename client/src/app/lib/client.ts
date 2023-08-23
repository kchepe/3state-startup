import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { from } from '@apollo/client';
import errorLink from './errorLink';
import httpLink from './httpLink';

const { getClient } = registerApolloClient(
  () =>
    new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link: from([errorLink, httpLink('http://server:3000/graphql')]),
    }),
);

export default getClient;
