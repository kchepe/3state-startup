'use client';

import Image from 'next/image';
import { useState } from 'react';
import Tabs from '@/app/common/Tabs';
import MortageCalculator from '@/app/common/MortageCalculator';
import ContactForm from './ContactForm';

const AgentsDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelectTab = (index: number) => {
    setCurrentIndex(index);
  };
  const tabMenu = [
    { label: 'Contact Agent', child: <ContactForm /> },
    { label: 'Mortage Calculator', child: <MortageCalculator /> },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col justify-center items-center gap-3">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          className="object-cover rounded-full w-36 h-36"
          alt="3state-agent"
          // eslint-disable-next-line max-len
          src="https://images.pexels.com/photos/7641998/pexels-photo-7641998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <span className="text-lg text-primary font-bold">John Doe</span>
        <span className="text-gray-500 text-sm -mt-3">john_doe@gmail.com</span>
        <span className="text-gray-500 text-sm -mt-2">0913 2345 678</span>
      </div>
      <div>
        <Tabs
          currentIndex={currentIndex}
          menu={tabMenu}
          handleSelectTab={handleSelectTab}
          className="text-xs"
        />
      </div>
    </div>
  );
};
export default AgentsDetails;
