import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import clsx from 'clsx';
import CloseCircleFill from '@/app/icons/CloseCircleFill';
import PhoneNumberField, { PhoneNumberFieldProps } from '../PhoneNumberField';
import Text from '../Text';
import Box from '../Box';

interface InputPhoneProps extends PhoneNumberFieldProps {
  name: string;
}

const InputPhone: FC<InputPhoneProps> = ({ name, ...inputProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...phoneField } }) => (
          <PhoneNumberField
            outlined
            {...phoneField}
            {...inputProps}
            className={clsx({
              'border-red-500 bg-red-500 bg-opacity-20': errors[name],
            })}
            endIcon={errors[name] && <CloseCircleFill className="text-red-500" />}
          />
        )}
      />
      {errors[name] && <Text variant="error">{errors[name]?.message?.toString()}</Text>}
    </Box>
  );
};

export default InputPhone;
