'use client';

import Image from 'next/image';
import { useState } from 'react';
import Tabs from '@/app/common/Tabs';
import MortageCalculator from '@/app/common/MortageCalculator';
import Box from '@/app/common/Box';
import Text from '@/app/common/Text';
import { IUser } from '@/app/types/types';
import ContactForm from './ContactForm';

interface IAgetDetailsProps {
  user: Omit<IUser, 'password' | 'userType'>;
}

const AgentsDetails = ({ user }: IAgetDetailsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelectTab = (index: number) => {
    setCurrentIndex(index);
  };
  const tabMenu = [
    { label: 'Contact Agent', child: <ContactForm /> },
    { label: 'Mortage Calculator', child: <MortageCalculator /> },
  ];
  return (
    <Box className="flex flex-col gap-3">
      <Box className="flex flex-col justify-center items-center gap-3">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          className="object-cover rounded-full w-36 h-36 border"
          alt="3state-agent"
          // eslint-disable-next-line max-len
          src={user.imageUrl}
        />
        <Text variant="h5">
          {user.firstName} {user.lastName}
        </Text>
        <Text className="text-sm -mt-3" variant="subtitle">
          {user.email}
        </Text>
        <Text className="text-sm -mt-2" variant="subtitle">
          {user.phoneNumber}
        </Text>
      </Box>
      <Box>
        <Tabs
          currentIndex={currentIndex}
          menu={tabMenu}
          handleSelectTab={handleSelectTab}
          className="text-xs"
        />
      </Box>
    </Box>
  );
};
export default AgentsDetails;
