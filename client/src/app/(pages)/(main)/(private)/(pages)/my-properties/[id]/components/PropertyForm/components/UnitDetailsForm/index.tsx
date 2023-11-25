/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import SelectForm from '@/app/common/FormBuilder/SelectForm';
import InputNumber from '@/app/common/FormBuilder/InputNumber';
import Box from '@/app/common/Box';
import Peso from '@/app/icons/Peso';
import InputForm from '@/app/common/FormBuilder/InputForm';

const UnitDetailsForm = () => {
  const propertyType = useWatch({ name: 'type' });
  const { unregister, register } = useFormContext();
  useEffect(() => {
    if (propertyType.value === 'land') {
      unregister('bathroom');
      unregister('bedroom');
      unregister('parkingSpace');
      unregister('balcony');
      unregister('furnishing');
      unregister('floorAreaInSqm');
    } else {
      register('bathroom');
      register('bedroom');
      register('parkingSpace');
      register('balcony');
      register('furnishing');
      register('floorAreaInSqm');
    }
  }, [propertyType]);

  return (
    <Box className="grid grid-cols-12 gap-4">
      <Box className="col-span-full">
        <InputNumber
          name="price"
          label="Price"
          placeholder="Enter Price"
          contained
          startIcon={<Peso />}
        />
      </Box>
      <Box className="col-span-full">
        <InputForm
          name="lotAreaInSqm"
          label="Lot Area (sqm)"
          type="number"
          min={0}
          placeholder="Enter Lot Area in square meters"
          contained
        />
      </Box>

      {propertyType.value !== 'land' && (
        <>
          <Box className="col-span-full">
            <InputForm
              name="floorAreaInSqm"
              contained
              type="number"
              min={0}
              label="Floor Area (sqm)"
              placeholder="Enter Floor Area in square meters"
            />
          </Box>
          <Box className="col-span-full">
            <InputForm
              name="bathroom"
              min={0}
              label="Bathroom"
              type="number"
              placeholder="Enter Number of Bathroom"
              contained
            />
          </Box>
          <Box className="col-span-full">
            <InputForm
              name="bedroom"
              min={0}
              label="Bedroom"
              type="number"
              placeholder="Enter Number of Bathroom"
              contained
            />
          </Box>
          <Box className="col-span-full">
            <InputForm
              type="number"
              min={0}
              name="parkingSpace"
              label="Parking Space"
              placeholder="Enter Number of Parking Spaces"
              contained
            />
          </Box>
          <Box className="col-span-full">
            <SelectForm
              name="furnishing"
              options={[
                { label: 'Bare Unit', value: 'bare unit' },
                { label: 'Bare Shell', value: 'bare shell' },
                { label: 'Fully Furnished', value: 'fully furnished' },
                { label: 'Semi Furnished', value: 'semi furnished' },
              ]}
              label="Furnishing"
              contained
            />
          </Box>
          <Box className="col-span-full">
            <SelectForm
              name="balcony"
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ]}
              label="Balcony"
              contained
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default UnitDetailsForm;
