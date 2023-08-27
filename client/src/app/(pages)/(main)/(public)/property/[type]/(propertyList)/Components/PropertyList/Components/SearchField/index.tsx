'use client';

import { FC } from 'react';
import TextField from '@/app/common/TextField';
import Toggle from '@/app/common/Toggle';
import usePropertyManager from '@/app/hooks/usePropertyManager';
import Box from '@/app/common/Box';
import Text from '@/app/common/Text';
import { properties } from '../../mockData';

interface SearchFieldProps {
  currentWidth: number;
}

const SearchField: FC<SearchFieldProps> = ({ currentWidth }) => {
  const { propertiesState, searchProperty } = usePropertyManager();

  const handleShowMap = () => {
    searchProperty('showMap', !propertiesState.filter.showMap);
  };

  return (
    <Box
      className="fixed bg-white flex gap-3 flex-col pb-2"
      style={{
        display: currentWidth === 0 ? 'none' : 'block',
        width: currentWidth,
      }}
    >
      <Box>
        <TextField
          placeholder="Search property here..."
          className="p-3 bg-gray-100"
          type="search"
          // startIcon={<BiSearch className="text-gray-500 text-lg" />}
        />
      </Box>
      <Box className="flex items-center justify-between mt-2">
        <Text className="font-bold">{properties.length} Properties Available</Text>
        <Toggle
          label="Show Map"
          onChange={handleShowMap}
          checked={propertiesState.filter.showMap}
        />
      </Box>
    </Box>
  );
};

export default SearchField;
