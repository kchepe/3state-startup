'use client';

import { FC, useContext } from 'react';
import { BiSearch } from 'react-icons/bi';
import TextField from '@/app/common/TextField';
import Toggle from '@/app/common/Toggle';
import { PropertyContext } from '@/app/context/PropertyContext';
import { properties } from '../../mockData';

interface SearchFieldProps {
  currentWidth: number;
}

const SearchField: FC<SearchFieldProps> = ({ currentWidth }) => {
  const { state, dispatch } = useContext(PropertyContext);

  const handleShowMap = () => [
    dispatch({
      type: 'SEARCH_PROPERTY',
      payload: { field: 'showMap', value: !state.filter.showMap },
    }),
  ];

  return (
    <div
      className="fixed bg-white flex gap-3 flex-col pb-2"
      style={{
        display: currentWidth === 0 ? 'none' : 'block',
        width: currentWidth,
      }}
    >
      <div>
        <TextField
          placeholder="Search property here..."
          className="p-3 bg-gray-100"
          type="search"
          startIcon={<BiSearch className="text-gray-500 text-lg" />}
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="font-bold">{properties.length} Properties Available</span>
        <Toggle label="Show Map" onChange={handleShowMap} checked={state.filter.showMap} />
      </div>
    </div>
  );
};

export default SearchField;
