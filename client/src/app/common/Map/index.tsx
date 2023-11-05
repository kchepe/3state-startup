'use client';

import React, { ReactNode } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { LatLngTuple } from 'leaflet';

interface MapProps {
  center: LatLngTuple;
  zoom?: number;
  children: ReactNode;
}

const Map = ({ zoom = 13, center, children }: MapProps) => (
  <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="h-full z-0">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
          OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {children}
  </MapContainer>
);

export default Map;
