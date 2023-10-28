'use client';

import { FC } from 'react';
import TextField from '@/app/common/TextField';
import Toggle from '@/app/common/Toggle';
import usePropertyManager from '@/app/hooks/usePropertyManager';
import Box from '@/app/common/Box';
import Text from '@/app/common/Text';
import Search from '@/app/icons/Search';

interface SearchFieldProps {
  totalPropertyCount: number;
}

const SearchField: FC<SearchFieldProps> = ({ totalPropertyCount }) => {
  const { propertiesState, searchProperty } = usePropertyManager();

  const handleShowMap = () => {
    searchProperty('showMap', !propertiesState.filter.showMap);
  };

  return (
    <Box className="bg-white flex gap-3 flex-col pb-2 w-full">
      <Box>
        <TextField
          placeholder="Search property here..."
          className="p-3 bg-gray-100"
          type="search"
          startIcon={<Search className="text-gray-500 w-4 h-4" />}
        />
      </Box>
      <Box className="flex items-center justify-between mt-2">
        <Text className="font-bold">{totalPropertyCount} Properties Available</Text>
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
