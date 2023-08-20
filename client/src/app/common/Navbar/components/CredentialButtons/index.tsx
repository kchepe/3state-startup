import Link from 'next/link';
import React from 'react';
import Button from '@/app/common/Button';
import getSessionUtil from '@/app/utils/getSession.util';
import ProfileDropDownButton from '../ProfileDropDownButton';

const CredentialButtons = async () => {
  const session = await getSessionUtil();

  if (!session) {
    return (
      <>
        <Link href="/sign-in">
          <Button className="font-semibold hover:text-gray-500">Login</Button>
        </Link>
        <Link href="/register">
          <Button color="primary" className="rounded-full">
            Signup
          </Button>
        </Link>
      </>
    );
  }
  return <ProfileDropDownButton />;
};

export default CredentialButtons;
