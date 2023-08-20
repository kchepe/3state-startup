import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Select, { IOption } from '../Select';

interface SelectFormProps {
  name: string;
  options: IOption[];
  label?: string;
}

const SelectForm: FC<SelectFormProps> = ({ name, options, label = '' }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { name: inputName, onChange, value } }) => (
          <Select
            options={options}
            label={label}
            name={inputName}
            value={value}
            onChange={onChange}
          />
        )}
      />
      {errors[name] && (
        <span className="text-[10px] ml-4 text-red-600">{errors[name]?.message?.toString()}</span>
      )}
    </div>
  );
};

export default SelectForm;
