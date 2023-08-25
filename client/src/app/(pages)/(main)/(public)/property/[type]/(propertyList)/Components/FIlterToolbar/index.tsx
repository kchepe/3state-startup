import { FC } from 'react';
import Button from '@/app/common/Button';
import { IOfferType } from '@/app/types/types';
import { amenities } from '@/app/constant';
import Box from '@/app/common/Box';
import Text from '@/app/common/Text';
import OfferType from './Components/OfferType';
import PriceSlider from './Components/PriceSlider';
import CheckboxListFilter from './Components/CheckboxListFilter';
import PropertyType from './Components/PropertyType';
import NumberFilter from './Components/NumberFilter';

interface FilterToolbarProps {
  offerType: IOfferType;
}

const FilterToolBar: FC<FilterToolbarProps> = ({ offerType }) => (
  <Box className="flex flex-col gap-8">
    <Box className="flex items-center justify-between">
      <Text className="font-bold">Filter</Text>
      <Button size="small" className="hover:text-gray-500">
        Clear Filters
      </Button>
    </Box>
    <Box>
      <OfferType offerType={offerType} />
    </Box>
    <Box>
      <PropertyType />
    </Box>
    <Box>
      <PriceSlider />
    </Box>
    <Box>
      <NumberFilter title="Bedrooms" type="bedrooms" />
    </Box>
    <Box>
      <NumberFilter title="Bathrooms" type="bathrooms" />
    </Box>
    <Box className="flex gap-4 flex-col">
      <CheckboxListFilter header="Amenities" options={amenities} />
    </Box>
  </Box>
);

export default FilterToolBar;
