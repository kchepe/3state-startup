import React from 'react';
import { useQuery } from '@apollo/client';
import CheckboxForm from '@/app/common/FormBuilder/CheckboxForm';
import Box from '@/app/common/Box';
import GET_AMENITIES from '@/app/gql/queries/amenities';
import { authClient } from '@/app/lib/apolloClient';
import { IAmenities, IAmenitiesWithCategory } from '@/app/types/types';
import Text from '@/app/common/Text';
import { capitalizeFirstString } from '@/app/utils/string.util';

const AmenitiesForm = () => {
const { data } = useQuery(GET_AMENITIES, {
  client: authClient,
});

  return (
    <Box className="flex flex-col gap-4">
      {data?.amenities.map((category: IAmenitiesWithCategory) => (
        <Box key={category.id}>
          <Box className="font-semibold border-b py-4 mb-6">
            <Text>{capitalizeFirstString(category.categoryName)}</Text>
          </Box>
          <Box className="flex flex-wrap gap-8">
            {category.amenities.map((amenity: IAmenities) =>
              <CheckboxForm name={amenity.name.toLowerCase()} label={amenity.name} />)}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AmenitiesForm;
