import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import PhoneNumberField, { PhoneNumberFieldProps } from '../PhoneNumberField';

interface InputPhoneProps extends PhoneNumberFieldProps {
  name: string;
}

const InputPhone: FC<InputPhoneProps> = ({ name, ...inputProps }) => {
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
          <PhoneNumberField
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

export default InputPhone;
