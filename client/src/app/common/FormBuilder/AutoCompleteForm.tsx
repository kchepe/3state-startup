import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Text from '../Text';
import Box from '../Box';
import AutoComplete, { AutoCompleteProps } from '../AutoComplete';

interface AutoCompleteFormProps extends Omit<AutoCompleteProps, 'value'> {
  name: string;
}

const AutoCompleteForm: FC<AutoCompleteFormProps> = ({ name, ...selectProps }) => {
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
          <AutoComplete {...selectField} {...selectProps} />
        )}
      />
      {errors[name] && <Text variant="error">{errors[name]?.message?.toString()}</Text>}
    </Box>
  );
};

export default AutoCompleteForm;
