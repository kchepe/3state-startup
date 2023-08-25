import { FC } from 'react';
import Select, { IOption } from '@/app/common/Select';
import TextField from '@/app/common/TextField';
import { propertyTypeOptions } from '@/app/constant';
import Box from '@/app/common/Box';
import Text from '@/app/common/Text';

interface PropertyProps {
  selectedProperty: IOption;
  handleChangeSelectProperty: (value: IOption) => void;
}

const Property: FC<PropertyProps> = ({ selectedProperty, handleChangeSelectProperty }) => (
  <Box className="flex items-center gap-3">
    <Box className="w-44">
      <Select
        options={propertyTypeOptions}
        value={selectedProperty}
        onChange={handleChangeSelectProperty}
        className="bg-gray-100"
      />
    </Box>
    <Box>
      <Text className="text-primary">in</Text>
    </Box>
    <Box className="flex-1">
      <TextField placeholder="Search Location..." className="bg-gray-100" />
    </Box>
  </Box>
);

export default Property;
