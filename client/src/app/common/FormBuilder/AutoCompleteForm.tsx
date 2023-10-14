import React, { FC } from 'react';
import { Controller, get, useFormContext } from 'react-hook-form';
import { clsx } from 'clsx';
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

  const error = get(errors, name);
  return (
    <Box>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...selectField } }) => (
          <AutoComplete
            className={clsx({
              'border-red-500 bg-red-500 bg-opacity-20': errors[name],
            })}
            {...selectField}
            {...selectProps}
          />
        )}
      />
      {errors[name] && <Text variant="error">{error?.value.message.toString()}</Text>}
    </Box>
  );
};

export default AutoCompleteForm;
