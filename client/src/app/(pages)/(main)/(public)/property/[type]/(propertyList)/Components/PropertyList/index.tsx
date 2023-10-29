'use client';

import React from 'react';
import clsx from 'clsx';
import Box from '@/app/common/Box';
import PropertyCard from '@/app/common/PropertyCard';
import { IProperty } from '@/app/types/types';
import SearchField from './Components/SearchField';

interface PropertyListProps {
  properties: {
    properties: IProperty[];
    totalCount: number;
  };
  propertyLoading: boolean;
}

const PropertyList = ({ properties, propertyLoading }: PropertyListProps) => (
  <Box className="grid grid-cols-12 gap-5 relative">
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

export default PropertyList;
