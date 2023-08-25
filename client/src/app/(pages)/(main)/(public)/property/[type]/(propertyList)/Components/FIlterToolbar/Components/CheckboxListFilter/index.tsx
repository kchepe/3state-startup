'use client';

import { ChangeEvent, FC, ReactNode, useState } from 'react';
import Checkbox from '@/app/common/Checkbox';
import Box from '@/app/common/Box';
import FilterContainer from '../FilterContainer';

interface CheckboxListFilterProps {
  header: string | ReactNode;
  options: string[];
}

const CheckboxListFilter: FC<CheckboxListFilterProps> = ({ header, options }) => {
  const [selectedPropery, setSelectedProperty] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedProperty(event.target.checked);
  };

  return (
    <Box className="border-b pb-4">
      <FilterContainer header={header} showToggle>
        <Box className="flex flex-col gap-4">
          {options.map((menu) => (
            <Box key={menu}>
              <Checkbox checked={selectedPropery} handleChange={handleChange} label={menu} />
            </Box>
          ))}
        </Box>
      </FilterContainer>
    </Box>
  );
};

export default CheckboxListFilter;
