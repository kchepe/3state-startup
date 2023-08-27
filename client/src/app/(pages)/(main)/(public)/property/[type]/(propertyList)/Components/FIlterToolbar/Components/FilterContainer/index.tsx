'use client';

import React, { FC, ReactNode, useState } from 'react';
import Box from '@/app/common/Box';
import ChevronUp from '@/app/icons/ChevronUp';
import ChevronDown from '@/app/icons/ChevronDown';

interface FilterContainerProps {
  children: ReactNode;
  header: string | ReactNode;
  showToggle?: boolean;
}

const FilterContainer: FC<FilterContainerProps> = ({ children, header, showToggle = false }) => {
  const [toggleExpand, setToggleExpand] = useState(true);
  const handleToggleExpand = () => {
    setToggleExpand((prevState) => !prevState);
  };
  return (
    <Box className="flex flex-col gap-3">
      <Box className="flex items-center justify-between gap-3">
        <Box className="font-semibold flex-1 text-primary">{header}</Box>
        <Box className={`${showToggle ? 'block' : 'hidden'}`}>
          {toggleExpand ? (
            <ChevronUp className="text-xl cursor-pointer" onClick={handleToggleExpand} />
          ) : (
            <ChevronDown className="text-xl cursor-pointer" onClick={handleToggleExpand} />
          )}
        </Box>
      </Box>

      {toggleExpand && children}
    </Box>
  );
};

export default FilterContainer;
