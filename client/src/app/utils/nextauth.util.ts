/* eslint-disable @typescript-eslint/no-explicit-any */

import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';
import { LOG_IN } from '../gql/mutations/user';

const url = process.env.GRAPHQL_ENDPOINT_DOCKER as string;

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              query: LOG_IN,
              variables: {
                input: {
                  email: credentials?.email,
                  password: credentials?.password,
                },
              },
            }),
          });
          const data = await response.json();
          if (!data) {
            return null;
          }
          return data.data.login;
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      const newSession = { ...session };
      newSession.user = token as any;
      return newSession;
    },
  },
  // debug: process.env.ENVIRONMENT === 'development',
};

export default authOptions;
