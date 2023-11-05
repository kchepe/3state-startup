'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import InputForm from '@/app/common/FormBuilder/InputForm';
import Box from '@/app/common/Box';

const Map = dynamic(() => import('@/app/common/Map'), {
  ssr: false,
  loading: () => <Box className="text-center p-4">Loading Map...</Box>,
});

const LocationMarker = dynamic(() => import('./components/LocationMarker'), {
  ssr: false,
});

const MapLocationForm = () => (
  <Box className="flex flex-col gap-4">
    <Box className="flex gap-4 flex-wrap">
      <Box className="flex-1">
        <InputForm name="latitude" label="Latitude" contained disabled />
      </Box>
      <Box className="flex-1">
        <InputForm name="longitude" label="Longitude" contained disabled />
      </Box>
    </Box>
    <Box className="h-[500px]">
      <Map center={[10.3338, 123.8941]} zoom={6}>
        <LocationMarker />
      </Map>
    </Box>
  </Box>
);

export default MapLocationForm;
