import { from } from '@apollo/client';
import errorLink from './errorLink';
import httpLink from './httpLink';
import authLink from './authLink';

export const appLink = from([errorLink, httpLink]);

export const authAppLink = from([errorLink, authLink.concat(httpLink)]);
