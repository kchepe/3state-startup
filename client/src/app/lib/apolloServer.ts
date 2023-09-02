import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import errorLink from './errorLink';
import httpLink from './httpLink';
import getSessionUtil from '../utils/getSession.util';

const url = 'http://host.docker.internal:3000/graphql';

const authLinkServer = setContext(async (_, { headers }) => {
  const session = await getSessionUtil();
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${session?.token}`,
    },
  };
});

const { getClient: getAuthApolloServer } = registerApolloClient(
  () =>
    new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link: from([
        errorLink,
        authLinkServer.concat(httpLink(url)),
      ]),
    }),
);

const { getClient: getApolloServer } = registerApolloClient(
  () =>
    new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link: from([errorLink, httpLink(url)]),
    }),
);

export { getAuthApolloServer, getApolloServer };
