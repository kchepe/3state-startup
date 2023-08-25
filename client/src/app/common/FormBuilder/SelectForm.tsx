import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Select, { SelectProps } from '../Select';
import Text from '../Text';
import Box from '../Box';

interface SelectFormProps extends Omit<SelectProps, 'value'> {
  name: string;
}

const SelectForm: FC<SelectFormProps> = ({ name, ...selectProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...selectField } }) => (
          <Select {...selectField} {...selectProps} />
        )}
      />
      {errors[name] && <Text variant="error">{errors[name]?.message?.toString()}</Text>}
    </Box>
  );
};

export default SelectForm;
