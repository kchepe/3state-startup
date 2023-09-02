import Box from '@/app/common/Box';
import GET_CURRENT_USER from '@/app/gql/queries/user';
import { getAuthApolloServer } from '@/app/lib/apolloServer';

const AccountSettings = async () => {
  const { data } = await getAuthApolloServer().query({ query: GET_CURRENT_USER });
  return <Box>{data.currentUser.firstName}</Box>;
};

export default AccountSettings;
