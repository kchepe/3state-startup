import React from 'react';
import { TbCurrencyPeso } from 'react-icons/tb';
import SelectForm from '@/app/common/FormBuilder/SelectForm';
import InputNumber from '@/app/common/FormBuilder/InputNumber';

const UnitDetailsForm = () => (
  <div className="grid grid-cols-12 gap-4">
    <div className="col-span-full">
      <InputNumber
        name="price"
        label="Price"
        placeholder="Enter Price"
        contained
        startIcon={<TbCurrencyPeso />}
      />
    </div>
    <div className="col-span-full">
      <InputNumber
        name="lotArea"
        label="Lot Area"
        placeholder="Enter Lot Area in square meters"
        contained
      />
    </div>
    <div className="col-span-full">
      <InputNumber
        name="floorArea"
        contained
        label="Floor Area"
        placeholder="Enter Floor Area in square meters"
      />
    </div>
    <div className="col-span-full">
      <InputNumber
        name="bathroom"
        label="Bathroom"
        placeholder="Enter Number of Bathroom"
        contained
      />
    </div>
    <div className="col-span-full">
      <InputNumber
        name="parking"
        label="Parking"
        placeholder="Enter Number of Parking Spaces"
        contained
      />
    </div>
    <div className="col-span-full">
      <SelectForm name="furnishing" options={[]} label="Furnishing" contained />
    </div>
    <div className="col-span-full">
      <SelectForm name="balcony" options={[]} label="Balcony" contained />
    </div>
  </div>
);

export default UnitDetailsForm;
