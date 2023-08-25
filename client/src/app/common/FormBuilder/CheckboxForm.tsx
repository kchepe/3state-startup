import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Checkbox from '../Checkbox';
import Box from '../Box';
import Text from '../Text';

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
    <Box>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Checkbox checked={value} handleChange={onChange} label={label} />
        )}
      />
      {errors[name] && <Text variant="error">{errors[name]?.message?.toString()}</Text>}
    </Box>
  );
};

export default CheckboxForm;
