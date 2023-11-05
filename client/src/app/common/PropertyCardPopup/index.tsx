'use client';

import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { useRouter } from 'next/navigation';
import { IProperty } from '@/app/types/types';
import getLongLatUtil from '@/app/utils/getLongLatUtil';
import getPropertyFullAddress from '@/app/utils/fullAddress.util';
import Box from '@/app/common/Box';
import Button from '@/app/common/Button';
import NextImage from '@/app/common/NextImage';
import Peso from '@/app/icons/Peso';
import Text from '@/app/common/Text';

interface IPropertyCardPopup {
  property: IProperty;
  showViewButton?: boolean;
}

const PropertyCardPopup = ({ property, showViewButton }: IPropertyCardPopup) => {
  const { push } = useRouter();
  return (
    <Marker position={getLongLatUtil(property)}>
      <Popup>
        <Box className="flex flex-col gap-2">
          <NextImage className="object-cover h-32" alt="3state-property" src={property.images[0]} />
          <Text>{getPropertyFullAddress(property)}</Text>
          <Box className="flex gap-1 font-extrabold">
            <Peso /> {property.price}
          </Box>

          {showViewButton && (
            <Button
              color="primary"
              onClick={() =>
                push(`/property/${property.status === 'for rent' ? 'rent' : 'buy'}/${property.id}`)
              }
            >
              View Property
            </Button>
          )}
        </Box>
      </Popup>
    </Marker>
  );
};

export default PropertyCardPopup;
