import React from 'react';
import { useQuery } from '@apollo/client';
import { amenities } from '@/app/constant';
import CheckboxForm from '@/app/common/FormBuilder/CheckboxForm';
import Box from '@/app/common/Box';
import GET_AMENITIES from '@/app/gql/queries/amenities';

const AmenitiesForm = () => {
const { data } = useQuery(GET_AMENITIES);
  console.log(data);
  return (
    <Box className="grid grid-cols-12 gap-4">
      {amenities.map((amenity) => (
        <Box className="col-span-4" key={amenity}>
          <CheckboxForm name={amenity.toLowerCase()} label={amenity} />
        </Box>
      ))}
    </Box>
  );
};

export default AmenitiesForm;
