'use client';

import React, { useContext } from 'react';
import clsx from 'clsx';
import { propertyTypes } from '@/app/constant';
import { IPropertyType } from '@/app/types/types';
import { PropertyContext } from '@/app/context/PropertyContext';
import FilterContainer from '../FilterContainer';

const PropertyType = () => {
  const { state, dispatch } = useContext(PropertyContext);

  const handleSelectProperty = (value: IPropertyType) => {
    dispatch({ type: 'SEARCH_PROPERTY', payload: { field: 'propertyType', value } });
  };

  return (
    <FilterContainer header="Property Type">
      <div className="grid grid-cols-12 gap-2">
        {propertyTypes.map((type) => (
          <div key={type.label} className="col-span-4">
            <button
              type="button"
              onClick={() => handleSelectProperty(type.label.toLowerCase() as IPropertyType)}
              className={clsx(
                'flex flex-col gap-1 px-2 py-4 rounded-lg items-center justify-center w-full',
                state.filter.propertyType === type.label.toLocaleLowerCase()
                  ? 'border-primary border'
                  : 'border',
              )}
            >
              <div className="text-lg">{type.icon}</div>
              <span className="text-xs">{type.label}</span>
            </button>
          </div>
        ))}
      </div>
    </FilterContainer>
  );
};

export default PropertyType;
