import React, { FC } from 'react';
import { useController, useFormContext } from 'react-hook-form';
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

  const { field } = useController({
    name,
    control,
  });

  return (
    <Box>
      <Checkbox checked={field.value} handleChange={field.onChange} label={label} />
      {errors[name] && <Text variant="error">{errors[name]?.message?.toString()}</Text>}
    </Box>
  );
};

export default CheckboxForm;
