import React from 'react';
import CheckboxForm from '@/app/common/FormBuilder/CheckboxForm';
import Box from '@/app/common/Box';
import GET_AMENITIES from '@/app/gql/queries/amenities';
import { IAmenities, IAmenitiesWithCategory } from '@/app/types/types';
import Text from '@/app/common/Text';
import { capitalizeFirstString } from '@/app/utils/string.util';
import useQueryAuthClient from '@/app/hooks/Apollo/useQueryAuthClient';

const AmenitiesForm = () => {
const { data } = useQueryAuthClient(GET_AMENITIES);

  return (
    <Box className="flex flex-col gap-6">
      {data?.amenities.map((category: IAmenitiesWithCategory) => (
        <Box key={category.id}>
          <Box className="font-semibold border-b pb-4 mb-6">
            <Text>{capitalizeFirstString(category.categoryName)}</Text>
          </Box>
          <Box className="flex flex-wrap gap-8">
            {category.amenities.map((amenity: IAmenities) =>
              <CheckboxForm
                key={amenity.id}
                name={amenity.name.toLowerCase()}
                label={amenity.name}
              />)}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AmenitiesForm;
