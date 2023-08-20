'use client';

import { FC, useState } from 'react';
import Tabs from '@/app/common/Tabs';
import { IProperty } from '@/app/types/types';
import tabMenu from './tabMenu';

interface PropertyProps {
  property: IProperty;
}

const TabMenu: FC<PropertyProps> = ({ property }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelectTab = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <Tabs menu={tabMenu(property)} currentIndex={currentIndex} handleSelectTab={handleSelectTab} />
  );
};

export default TabMenu;
