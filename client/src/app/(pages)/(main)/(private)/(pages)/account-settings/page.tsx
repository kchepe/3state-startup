import GET_CURRENT_USER from '@/app/gql/queries/user';
import getAuthClient from '@/app/lib/authClient';

const AccountSettings = async () => {
  const { data } = await getAuthClient().query({ query: GET_CURRENT_USER });
  return <div>{data.currentUser.firstName}</div>;
};

export default AccountSettings;
