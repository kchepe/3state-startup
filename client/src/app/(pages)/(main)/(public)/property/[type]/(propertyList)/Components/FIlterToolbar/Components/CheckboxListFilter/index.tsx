'use client';

import { ChangeEvent, FC, ReactNode, useState } from 'react';
import Checkbox from '@/app/common/Checkbox';
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
    <div className="border-b pb-4">
      <FilterContainer header={header} showToggle>
        <div className="flex flex-col gap-4">
          {options.map((menu) => (
            <div key={menu}>
              <Checkbox checked={selectedPropery} handleChange={handleChange} label={menu} />
            </div>
          ))}
        </div>
      </FilterContainer>
    </div>
  );
};

export default CheckboxListFilter;
