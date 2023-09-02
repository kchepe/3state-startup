'use client';

import Link from 'next/link';
import React from 'react';
import { useSession } from 'next-auth/react';
import Button from '@/app/common/Button';
import Box from '@/app/common/Box';
import ProfileDropDownButton from '../ProfileDropDownButton';

const CredentialButtons = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <Box className="bg-gray-100 h-10 w-10 rounded-full" />;
  }

  if (!session?.user) {
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
  return (
    <div>
      <ProfileDropDownButton />

    </div>
  );
};

export default CredentialButtons;
