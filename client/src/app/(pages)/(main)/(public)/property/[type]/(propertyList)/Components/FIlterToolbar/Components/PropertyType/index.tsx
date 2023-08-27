'use client';

import React from 'react';
import clsx from 'clsx';
import { IPropertyType } from '@/app/types/types';
import usePropertyManager from '@/app/hooks/usePropertyManager';
import Box from '@/app/common/Box';
import Text from '@/app/common/Text';
import Button from '@/app/common/Button';
import Square from '@/app/icons/Square';
import House from '@/app/icons/House';
import Apartment from '@/app/icons/Apartment';
import CommercialBuilding from '@/app/icons/CommercialBuilding';
import Condominium from '@/app/icons/Condominium';
import HouseSimple from '@/app/icons/HouseSimple';
import FilterContainer from '../FilterContainer';

const propertyTypes = [
  { label: 'Any', icon: <HouseSimple className="w-5 h-5" /> },
  { label: 'House', icon: <House className="w-5 h-5" /> },
  { label: 'Land', icon: <Square className="w-5 h-5" /> },
  { label: 'Apartment', icon: <Apartment className="w-5 h-5" /> },
  { label: 'Commercial', icon: <CommercialBuilding className="w-5 h-5" /> },
  { label: 'Condominium', icon: <Condominium className="w-5 h-5" /> },
];

const PropertyType = () => {
  const { propertiesState, searchProperty } = usePropertyManager();

  const handleSelectProperty = (value: IPropertyType) => {
    searchProperty('propertyType', value);
  };

  return (
    <FilterContainer header="Property Type">
      <Box className="grid grid-cols-12 gap-2">
        {propertyTypes.map((type) => (
          <Box key={type.label} className="col-span-4">
            <Button
              onClick={() => handleSelectProperty(type.label.toLowerCase() as IPropertyType)}
              className={clsx(
                'flex flex-col gap-1 px-2 py-4 rounded-lg items-center justify-center w-full',
                propertiesState.filter.propertyType === type.label.toLocaleLowerCase()
                  ? 'border-primary border'
                  : 'border',
              )}
            >
              <Box>{type.icon}</Box>
              <Text className="text-xs">{type.label}</Text>
            </Button>
          </Box>
        ))}
      </Box>
    </FilterContainer>
  );
};

export default PropertyType;
