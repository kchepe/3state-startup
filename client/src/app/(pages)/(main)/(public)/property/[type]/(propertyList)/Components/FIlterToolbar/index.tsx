import { FC } from 'react';
import Button from '@/app/common/Button';
import { IOfferType } from '@/app/types/types';
import { amenities } from '@/app/constant';
import OfferType from './Components/OfferType';
import PriceSlider from './Components/PriceSlider';
import CheckboxListFilter from './Components/CheckboxListFilter';
import PropertyType from './Components/PropertyType';
import NumberFilter from './Components/NumberFilter';

interface FilterToolbarProps {
  offerType: IOfferType;
}

const FilterToolBar: FC<FilterToolbarProps> = ({ offerType }) => (
  <div className="flex flex-col gap-8">
    <div className="flex items-center justify-between">
      <span className="font-bold">Filter</span>
      <Button size="small" className="hover:text-gray-500">
        Clear Filters
      </Button>
    </div>
    <div>
      <OfferType offerType={offerType} />
    </div>
    <div>
      <PropertyType />
    </div>
    <div>
      <PriceSlider />
    </div>
    <div>
      <NumberFilter title="Bedrooms" type="bedrooms" />
    </div>
    <div>
      <NumberFilter title="Bathrooms" type="bathrooms" />
    </div>
    <div className="flex gap-4 flex-col">
      <CheckboxListFilter header="Amenities" options={amenities} />
    </div>
  </div>
);

export default FilterToolBar;
