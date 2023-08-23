'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { IoExitOutline } from 'react-icons/io5';
import { BiUser } from 'react-icons/bi';
import { BsHouseAdd } from 'react-icons/bs';
import Avatar from '@/app/common/Avatar';
import { capitalizeFirstString, getFirstLetter } from '@/app/utils/string.util';

const ProfileDropDownButton = () => {
  const { push } = useRouter();
  const { data } = useSession();

  const menu = [
    { label: 'Account Settings', fn: () => push('/account-settings'), icon: <BiUser /> },
    { label: 'Add Property', fn: () => push('/my-properties/add-property'), icon: <BsHouseAdd /> },
    { label: 'Sign Out', fn: () => signOut({ callbackUrl: '/' }), icon: <IoExitOutline /> },
  ];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className="inline-flex w-full justify-center gap-x-1.5
                  p-3 text-sm font-semibold
                text-white bg-primary shadow-sm hover:bg-primary_hover rounded-full"
        >
          {getFirstLetter(data?.user.user.firstName as string)}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md
              bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div>
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  onClick={() => push('/my-properties')}
                  className={clsx(
                    active ? 'bg-primary text-white rounded-t-md' : 'text-primary',
                    'p-4 text-sm w-full text-left flex items-center gap-2 border-b',
                  )}
                >
                  <div>
                    <Avatar>{getFirstLetter(data?.user.user.firstName as string)}</Avatar>
                  </div>
                  <div className="flex flex-col">
                    <span>
                      {capitalizeFirstString(
                        `${data?.user.user.firstName} ${data?.user.user.lastName}` as string,
                      )}
                    </span>
                    <span className="text-xs text-gray-400">
                      {capitalizeFirstString(data?.user.user.userType as string)}
                    </span>
                  </div>
                </button>
              )}
            </Menu.Item>
            {menu.map((item, index) => (
              <Menu.Item key={`${item.label}${index + 1}`}>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={item.fn}
                    className={clsx(
                      active ? 'bg-primary text-white last:rounded-b-md' : 'text-primary',
                      'w-full px-4 py-2 text-left text-sm flex items-center gap-3',
                    )}
                  >
                    <div className="text-base">{item.icon}</div>
                    {item.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileDropDownButton;
