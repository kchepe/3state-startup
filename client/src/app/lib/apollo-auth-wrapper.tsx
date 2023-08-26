'use client';

import { ApolloLink, from } from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { PropsWithChildren } from 'react';
import authLink from './authLink';
import errorLink from './errorLink';
import httpLink from './httpLink';

// TODO: TRANSFER URL to ENV

const authAppLink = from([
  errorLink,
  authLink.concat(httpLink('http://host.docker.internal:3000/graphql')),
]);

const makeClient = () =>
  new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            authAppLink,
          ])
        : authAppLink,
  });

const ApolloAuthWrapper = ({ children }: PropsWithChildren) => (
  <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
);

export default ApolloAuthWrapper;
