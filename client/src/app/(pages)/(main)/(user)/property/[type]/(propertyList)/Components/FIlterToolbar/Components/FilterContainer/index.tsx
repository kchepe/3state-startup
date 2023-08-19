'use client';

import React, { FC, ReactNode, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

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
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <div className="font-semibold flex-1 text-primary">{header}</div>
        <div className={`${showToggle ? 'block' : 'hidden'}`}>
          {toggleExpand ? (
            <MdKeyboardArrowUp className="text-xl cursor-pointer" onClick={handleToggleExpand} />
          ) : (
            <MdKeyboardArrowDown className="text-xl cursor-pointer" onClick={handleToggleExpand} />
          )}
        </div>
      </div>

      {toggleExpand && children}
    </div>
  );
};

export default FilterContainer;
