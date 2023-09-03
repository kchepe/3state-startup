import React from 'react';
import InputForm from '@/app/common/FormBuilder/InputForm';

const MapLocationForm = () => (
  <div className="flex gap-4 flex-wrap">
    <div className="flex-1">
      <InputForm name="longitude" label="Longitude" contained placeholder="Enter Longitude" />
    </div>
    <div className="flex-1">
      <InputForm name="latitude" label="Latitude" contained placeholder="Enter Latitude" />
    </div>
  </div>
  );

export default MapLocationForm;
