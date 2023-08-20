'use client';

import { FC, useContext } from 'react';
import { PropertyContext } from '@/app/context/PropertyContext';
import FilterContainer from '../FilterContainer';

interface NumberFilterProps {
  type: 'bedrooms' | 'bathrooms';
  title: string;
}

const NumberFilter: FC<NumberFilterProps> = ({ type, title }) => {
  const { state, dispatch } = useContext(PropertyContext);

  const handleSelectRoom = (value: number) => {
    dispatch({ type: 'SEARCH_PROPERTY', payload: { field: type, value } });
  };

  return (
    <FilterContainer header={title}>
      <div className="grid grid-cols-10 gap-2">
        {Array.from(Array(6).keys()).map((room) => (
          <div key={room} className={`${room === 0 ? 'hidden' : 'block'} col-span-2`}>
            <button
              type="button"
              className={`${
                state.filter[type] === room ? 'bg-primary text-white' : 'bg-transparent'
              } border p-2 w-full rounded-lg`}
              onClick={() => handleSelectRoom(room)}
            >
              {room === 5 ? '5+' : room}
            </button>
          </div>
        ))}
      </div>
    </FilterContainer>
  );
};

export default NumberFilter;
