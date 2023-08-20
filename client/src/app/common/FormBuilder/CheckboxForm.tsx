import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Checkbox from '../Checkbox';

interface CheckboxFormProps {
  name: string;
  label?: string;
}

const CheckboxForm: FC<CheckboxFormProps> = ({ name, label }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Checkbox checked={value} handleChange={onChange} label={label} />
        )}
      />
      {errors[name] && (
        <span className="text-[10px] ml-4 text-red-600">{errors[name]?.message?.toString()}</span>
      )}
    </div>
  );
};

export default CheckboxForm;
