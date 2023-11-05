'use client';

import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import { LatLng } from 'leaflet';
import { useFormContext } from 'react-hook-form';

const LocationMarker = () => {
  const [position, setPosition] = useState<LatLng | null>(null);

  const { setValue } = useFormContext();

  useMapEvents({
    click(e) {
      const { lng, lat } = e.latlng;

      setPosition(e.latlng);
      setValue('latitude', lat);
      setValue('longitude', lng);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default LocationMarker;
