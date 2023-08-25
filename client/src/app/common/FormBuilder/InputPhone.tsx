import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
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
          <PhoneNumberField outlined {...phoneField} {...inputProps} />
        )}
      />
      {errors[name] && <Text variant="error">{errors[name]?.message?.toString()}</Text>}
    </Box>
  );
};

export default InputPhone;
