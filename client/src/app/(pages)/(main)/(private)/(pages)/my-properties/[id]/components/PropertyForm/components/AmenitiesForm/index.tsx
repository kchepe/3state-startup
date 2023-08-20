import React from 'react';
import { amenities } from '@/app/constant';
import CheckboxForm from '@/app/common/FormBuilder/CheckboxForm';

const AmenitiesForm = () => (
  <div className="grid grid-cols-12 gap-4">
    {amenities.map((amenity) => (
      <div className="col-span-3" key={amenity}>
        <CheckboxForm name={amenity} label={amenity} />
      </div>
    ))}
  </div>
);

export default AmenitiesForm;
