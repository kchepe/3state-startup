import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import NumberField, { NumberFieldProps } from '../NumberField';

interface InputNumberProps extends NumberFieldProps {
  name: string;
}

const InputNumber: FC<InputNumberProps> = ({ name, ...inputProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <NumberField outlined {...field} {...inputProps} />}
      />
      {errors[name] && (
        <span className="text-[10px] ml-4 text-red-600">{errors[name]?.message?.toString()}</span>
      )}
    </div>
  );
};

export default InputNumber;
