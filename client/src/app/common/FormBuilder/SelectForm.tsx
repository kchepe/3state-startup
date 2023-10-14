import React, { FC } from 'react';
import { Controller, get, useFormContext } from 'react-hook-form';
import clsx from 'clsx';
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

  const error = get(errors, name);

  return (
    <Box>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...selectField } }) => (
          <Select
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

export default SelectForm;
