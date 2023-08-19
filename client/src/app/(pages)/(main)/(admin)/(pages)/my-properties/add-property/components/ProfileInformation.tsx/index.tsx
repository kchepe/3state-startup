import Avatar from '@/app/Common/Avatar';
import getSessionUtil from '@/app/utils/getSession.util';
import { capitalizeFirstString, getFirstLetter } from '@/app/utils/string.util';

const ProfileInformation = async () => {
  const session = await getSessionUtil();
  return (
    <div className="flex items-center gap-5">
      <Avatar size="large">{getFirstLetter(session?.user.firstName as string)}</Avatar>
      <div>
        <h1 className="text-2xl font-black">
          {capitalizeFirstString(`${session?.user.firstName} ${session?.user.lastName}` as string)}
        </h1>
        <span className="text-gray-500 text-sm">{session?.user.userType}</span>
      </div>
    </div>
  );
};

export default ProfileInformation;
