'use client';

import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { useRouter } from 'next/navigation';
import { IProperty } from '@/app/types/types';
import getLongLatUtil from '@/app/utils/getLongLatUtil';
import getPropertyFullAddress from '@/app/utils/fullAddress.util';
import Peso from '@/app/icons/Peso';
import Box from '../Box';
import Text from '../Text';
import Button from '../Button';
import NextImage from '../NextImage';

interface MapProps {
  properties: IProperty[];
  showViewPropertyButton?: boolean;
  zoom?: number;
}

const Map = ({ properties, showViewPropertyButton = false, zoom = 13 }: MapProps) => {
  const { push } = useRouter();

  return (
    <MapContainer
      center={[+properties[0].longitude, +properties[0].latitude]}
      zoom={zoom}
      scrollWheelZoom={false}
      className="h-full z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
          OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {properties.map((property, index: number) => (
        <Marker position={getLongLatUtil(property)} key={`map ${index + 1}`}>
          <Popup>
            <Box className="flex flex-col gap-2">
              <NextImage
                className="object-cover h-32"
                alt="3state-property"
                src={property.images[0]}
              />
              <Text>{getPropertyFullAddress(property)}</Text>
              <Box className="flex gap-1 font-extrabold">
                <Peso /> {property.price}
              </Box>
              {showViewPropertyButton && (
                <Button
                  color="primary"
                  onClick={() =>
                    push(
                      `/property/${property.housingMethod === 'for rent' ? 'rent' : 'buy'}/${
                        property.id
                      }`,
                    )
                  }
                >
                  View Property
                </Button>
              )}
            </Box>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
