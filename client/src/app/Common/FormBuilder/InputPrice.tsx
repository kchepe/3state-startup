import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import PriceField, { PriceFieldProps } from '../PriceField';

interface InputPriceProps extends PriceFieldProps {
  name: string;
}

const InputPrice: FC<InputPriceProps> = ({ name, ...inputProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { name: inputName, onBlur, onChange, value } }) => (
          <PriceField
            outlined
            name={inputName}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            {...inputProps}
            id={inputName}
          />
        )}
      />
      {errors[name] && (
        <span className="text-[10px] ml-4 text-red-600">{errors[name]?.message?.toString()}</span>
      )}
    </div>
  );
};

export default InputPrice;
