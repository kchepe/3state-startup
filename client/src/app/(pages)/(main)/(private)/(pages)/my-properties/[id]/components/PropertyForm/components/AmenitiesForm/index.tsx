import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import Box from '@/app/common/Box';
import GET_AMENITIES from '@/app/gql/queries/amenities';
import { IAmenities, IAmenitiesWithCategory } from '@/app/types/types';
import Text from '@/app/common/Text';
import { capitalizeFirstString } from '@/app/utils/string.util';
import useQueryAuthClient from '@/app/hooks/Apollo/useQueryAuthClient';
import Checkbox from '@/app/common/Checkbox';

const AmenitiesForm = () => {
  const { data } = useQueryAuthClient(GET_AMENITIES);
  const { setValue } = useFormContext();
  const amenities = useWatch({ name: 'amenities' });

  const handleCheckboxChange = (isChecked: boolean, newAmenity: string) => {
    if (isChecked) {
      setValue('amenities', [...amenities, newAmenity]);
    } else {
      setValue(
        'amenities',
        amenities.filter((amenity: string) => amenity !== newAmenity),
      );
    }
  };

  return (
    <Box className="flex flex-col gap-6">
      {data?.amenities.map((category: IAmenitiesWithCategory) => (
        <Box key={category.id}>
          <Box className="font-semibold border-b pb-4 mb-6">
            <Text>{capitalizeFirstString(category.categoryName)}</Text>
          </Box>
          <Box className="flex flex-wrap gap-8">
            {category.amenities.map((amenity: IAmenities) => (
              <Checkbox
                id={amenity.id}
                key={amenity.id}
                label={amenity.name}
                checked={amenities.includes(amenity.name)}
                handleChange={(event) => handleCheckboxChange(event.target.checked, amenity.name)}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AmenitiesForm;
