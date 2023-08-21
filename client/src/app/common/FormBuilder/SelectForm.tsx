import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Select, { SelectProps } from '../Select';

interface SelectFormProps extends Omit<SelectProps, 'value'> {
  name: string;
}

const SelectForm: FC<SelectFormProps> = ({ name, ...selectProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...selectField } }) => (
          <Select {...selectField} {...selectProps} />
        )}
      />
      {errors[name] && (
        <span className="text-[10px] ml-4 text-red-600">{errors[name]?.message?.toString()}</span>
      )}
    </div>
  );
};

export default SelectForm;
