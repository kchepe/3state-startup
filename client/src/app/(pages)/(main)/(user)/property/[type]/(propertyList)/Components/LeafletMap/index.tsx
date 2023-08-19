'use client';

import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet';

const position = [10.28182, 123.974182] as LatLngTuple;

const LeafletMap = () => (
  <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full z-0">
    <TileLayer
      attribution='&copy;
      <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
);

export default LeafletMap;
