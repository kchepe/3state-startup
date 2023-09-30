'use client';

import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import InputForm from '@/app/common/FormBuilder/InputForm';
import GET_PROVINCES from '@/app/gql/queries/provinces';
import useQueryAuthClient from '@/app/hooks/Apollo/useQueryAuthClient';
import { ICity, IProvince } from '@/app/types/types';
import AutoCompleteForm from '@/app/common/FormBuilder/AutoCompleteForm';
import generateOptions from '@/app/utils/option.utl';

const AddressForm = () => {
  const { data: provinces } = useQueryAuthClient(GET_PROVINCES);
  const { setValue, watch } = useFormContext();
  const [provinceValue, cityValue] = watch(['province', 'city']);

  useEffect(() => {
    const subscription = watch((_, { name }) => {
      if (name === 'province') {
        setValue('city', { label: '', value: '' });
        setValue('barangay', { label: '', value: '' });
      }
      if (name === 'city') {
        setValue('barangay', { label: '', value: '' });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue]);

  const selectedProvince = provinces?.provinces.find(
    (province: IProvince) => province.provinceCode === provinceValue.value,
  );

  const selectedCity = selectedProvince?.cities.find(
    (city: ICity) => city.cityCode === cityValue.value,
  );

  const provincesOptions = generateOptions(
    provinces?.provinces ?? [],
    'provinceName',
    'provinceCode',
  );

  const cityOptions = generateOptions(selectedProvince?.cities ?? [], 'cityName', 'cityCode');

  const barangayOptions = generateOptions(selectedCity?.barangays ?? [], 'brgyName', 'brgyCode');

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-full">
        <InputForm name="address" label="Address" contained placeholder="Enter Address" />
      </div>
      <div className="col-span-full">
        <AutoCompleteForm name="province" options={provincesOptions} label="Province" contained />
      </div>
      <div className="col-span-full">
        <AutoCompleteForm
          name="city"
          options={cityOptions}
          label="City"
          contained
          disabled={!provinceValue.value}
        />
      </div>
      <div className="col-span-full">
        <AutoCompleteForm
          name="barangay"
          options={barangayOptions}
          label="Barangay"
          contained
          disabled={!cityValue.value}
        />
      </div>
      <div className="col-span-full">
        <InputForm label="Zipcode" contained placeholder="Enter zipcode" name="zipCode" />
      </div>
    </div>
  );
};

export default AddressForm;
