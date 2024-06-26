/* eslint-disable @typescript-eslint/no-explicit-any */

import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';
import { LOG_IN } from '../gql/mutations/user';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        try {
          const response = await fetch('http://server:3000/graphql', {
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
        } catch (err) {
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
  debug: process.env.ENVIRONMENT === 'development',
};

export default authOptions;
