'use client';

import { ApolloLink } from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { PropsWithChildren } from 'react';
import { authAppLink } from './appLink';

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
