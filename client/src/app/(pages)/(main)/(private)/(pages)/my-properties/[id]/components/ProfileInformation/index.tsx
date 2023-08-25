import Avatar from '@/app/common/Avatar';
import Box from '@/app/common/Box';
import Text from '@/app/common/Text';
import getSessionUtil from '@/app/utils/getSession.util';
import { capitalizeFirstString, getFirstLetter } from '@/app/utils/string.util';

const ProfileInformation = async () => {
  const session = await getSessionUtil();
  return (
    <Box className="flex items-center gap-5">
      <Avatar size="large">{getFirstLetter(session?.user.firstName as string)}</Avatar>
      <Box>
        <Text variant="h3" className="font-black">
          {capitalizeFirstString(`${session?.user.firstName} ${session?.user.lastName}` as string)}
        </Text>
        <Text className="text-gray-500 text-sm">{session?.user.userType}</Text>
      </Box>
    </Box>
  );
};

export default ProfileInformation;
