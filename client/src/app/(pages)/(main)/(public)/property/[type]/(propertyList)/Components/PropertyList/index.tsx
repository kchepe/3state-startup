'use client';

import React, { FC } from 'react';
import clsx from 'clsx';
import Box from '@/app/common/Box';
import useQueryClient from '@/app/hooks/Apollo/useQueryClient';
import { GET_ALL_PROPERTIES } from '@/app/gql/queries/properties';
import PropertyCard from '@/app/common/PropertyCard';
import { IProperty } from '@/app/types/types';
import SearchField from './Components/SearchField';

const PropertyList: FC = () => {
  const { data, loading } = useQueryClient(GET_ALL_PROPERTIES);

  return (
    <Box className="grid grid-cols-12 gap-5 relative">
      <Box className="col-span-full">
        <SearchField totalPropertyCount={data?.getAllProperties.totalCount ?? 0} />
      </Box>
      <Box className={clsx('col-span-full grid grid-cols-card-list gap-8')}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          data?.getAllProperties.properties.map((property: IProperty) => (
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
