'use client';

import React from 'react';
import clsx from 'clsx';
import Box from '@/app/common/Box';
import PropertyCard from '@/app/common/PropertyCard';
import { IProperty } from '@/app/types/types';
import usePropertyManager from '@/app/hooks/usePropertyManager';
import SearchField from './Components/SearchField';

interface PropertyListProps {
  properties: {
    properties: IProperty[];
    totalCount: number;
  };
  propertyLoading: boolean;
}

const PropertyList = ({ properties, propertyLoading }: PropertyListProps) => {
  const {
    propertiesState: {
      filter: { showMap },
    },
  } = usePropertyManager();
  return (
    <Box
      className={clsx('grid grid-cols-12 gap-5', {
        'pr-4': !showMap,
      })}
    >
      <Box className="col-span-full">
        <SearchField totalPropertyCount={properties?.totalCount ?? 0} />
      </Box>
      <Box className={clsx('col-span-full grid grid-cols-card-list gap-8')}>
        {propertyLoading ? (
          <div>Loading...</div>
        ) : (
          properties.properties.map((property: IProperty) => (
            <Box key={property.id} className="col-span-1">
              <PropertyCard property={property} />
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};

export default PropertyList;
