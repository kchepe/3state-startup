import { setContext } from '@apollo/client/link/context';
import getSessionUtil from '@/app/utils/getSession.util';

const authLink = setContext(async (_, { headers }) => {
  const session = await getSessionUtil();
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${session?.token}`,
    },
  };
});

export default authLink;
