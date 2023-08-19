'use client';

import { ChangeEvent, FC, ReactNode, useState } from 'react';
import Checkbox from '@/app/Common/Checkbox';
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
              <label className="flex gap-2 items-center" htmlFor="checkbox">
                <Checkbox checked={selectedPropery} handleChange={handleChange} />
                <span>{menu}</span>
              </label>
            </div>
          ))}
        </div>
      </FilterContainer>
    </div>
  );
};

export default CheckboxListFilter;
