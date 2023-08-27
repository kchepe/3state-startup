import React from 'react';
import SelectForm from '@/app/common/FormBuilder/SelectForm';
import InputNumber from '@/app/common/FormBuilder/InputNumber';
import Box from '@/app/common/Box';
import Peso from '@/app/icons/Peso';

const UnitDetailsForm = () => (
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
      <InputNumber
        name="lotArea"
        label="Lot Area"
        placeholder="Enter Lot Area in square meters"
        contained
      />
    </Box>
    <Box className="col-span-full">
      <InputNumber
        name="floorArea"
        contained
        label="Floor Area"
        placeholder="Enter Floor Area in square meters"
      />
    </Box>
    <Box className="col-span-full">
      <InputNumber
        name="bathroom"
        label="Bathroom"
        placeholder="Enter Number of Bathroom"
        contained
      />
    </Box>
    <Box className="col-span-full">
      <InputNumber
        name="parking"
        label="Parking"
        placeholder="Enter Number of Parking Spaces"
        contained
      />
    </Box>
    <Box className="col-span-full">
      <SelectForm name="furnishing" options={[]} label="Furnishing" contained />
    </Box>
    <Box className="col-span-full">
      <SelectForm name="balcony" options={[]} label="Balcony" contained />
    </Box>
  </Box>
);

export default UnitDetailsForm;
