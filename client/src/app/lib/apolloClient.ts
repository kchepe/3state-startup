// lib/apollo.js

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getSession } from 'next-auth/react';
import httpLink from './httpLink';

const url = 'http://localhost:3000/graphql';

const authLinkClient = setContext(async (_, { headers }) => {
    const session = await getSession();
    return {
        headers: {
          ...headers,
        authorization: session ? `Bearer ${session.user.token}` : '',
        },
      };
});

const graphqlClient = new ApolloClient({
    link: httpLink(url),
  cache: new InMemoryCache(),
});

const authClient = new ApolloClient({
  link: authLinkClient.concat(httpLink(url)),
  cache: new InMemoryCache(),
});

export { graphqlClient, authClient };
