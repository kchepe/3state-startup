'use client';

import React, { useState } from 'react';
import { IOption } from '@/app/Common/Select';
import { IOfferType } from '@/app/types/types';
import Button from '@/app/Common/Button';
import RentBuy from './components/RentBuy';
import Property from './components/Property';
import { propertyOptions } from './constant';

const SearchArea = () => {
  const [rentBuyValue, setRentBuyValue] = useState<IOfferType>('buy');
  const [selectedProperty, setSelectedProperty] = useState<IOption>(propertyOptions[0]);

  const handleChangeMethod = (housingMethod: IOfferType) => {
    setRentBuyValue(housingMethod);
  };

  const handleChangeSelectProperty = (value: IOption) => {
    setSelectedProperty(value);
  };

  return (
    <div className="grid grid-cols-12 gap-2 items-center bg-white text-white p-4 rounded-lg">
      <div className="col-span-2">
        <RentBuy handleChoose={handleChangeMethod} rentBuyValue={rentBuyValue} />
      </div>
      <div className="col-span-8">
        <Property
          selectedProperty={selectedProperty}
          handleChangeSelectProperty={handleChangeSelectProperty}
        />
      </div>
      <div className="col-span-2 text-right">
        <Button color="primary">Search</Button>
      </div>
    </div>
  );
};

export default SearchArea;
