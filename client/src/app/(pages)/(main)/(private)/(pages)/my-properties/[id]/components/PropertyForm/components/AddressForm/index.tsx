import React from 'react';
import InputForm from '@/app/common/FormBuilder/InputForm';
import SelectForm from '@/app/common/FormBuilder/SelectForm';

const AddressForm = () => (
  <div className="grid grid-cols-12 gap-4">
    <div className="col-span-full">
      <InputForm name="address" label="Address" contained placeholder="Enter Address" />
    </div>
    <div className="col-span-full">
      <SelectForm
        name="barangay"
        options={[]}
        label="Barangay"
        contained
      />
    </div>
    <div className="col-span-full">
      <SelectForm
        name="city"
        options={[]}
        label="City"
        contained
      />
    </div>
    <div className="col-span-full">
      <SelectForm
        name="province"
        options={[]}
        label="Province"
        contained
      />
    </div>
    <div className="col-span-full">
      <InputForm label="Zipcode" contained placeholder="Enter zipcode" name="zipcode" />
    </div>

  </div>
  );

export default AddressForm;
