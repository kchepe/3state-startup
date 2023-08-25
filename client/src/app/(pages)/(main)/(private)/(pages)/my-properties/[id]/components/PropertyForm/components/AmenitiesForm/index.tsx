import React from 'react';
import { amenities } from '@/app/constant';
import CheckboxForm from '@/app/common/FormBuilder/CheckboxForm';
import Box from '@/app/common/Box';

const AmenitiesForm = () => (
  <Box className="grid grid-cols-12 gap-4">
    {amenities.map((amenity) => (
      <Box className="col-span-4" key={amenity}>
        <CheckboxForm name={amenity.toLowerCase()} label={amenity} />
      </Box>
    ))}
  </Box>
);

export default AmenitiesForm;
