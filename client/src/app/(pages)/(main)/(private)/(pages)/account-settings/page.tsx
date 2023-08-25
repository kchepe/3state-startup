import Box from '@/app/common/Box';
import GET_CURRENT_USER from '@/app/gql/queries/user';
import getAuthClient from '@/app/lib/authClient';

const AccountSettings = async () => {
  const { data } = await getAuthClient().query({ query: GET_CURRENT_USER });
  return <Box>{data.currentUser.firstName}</Box>;
};

export default AccountSettings;
