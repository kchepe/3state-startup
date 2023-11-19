import React, { FC } from 'react';
import { get, useController, useFormContext } from 'react-hook-form';
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

  const { field } = useController({ name, control });

  return (
    <Box>
      <Select
        className={clsx({
          'border-red-500 bg-red-500 bg-opacity-20': errors[name],
        })}
        {...field}
        {...selectProps}
      />
      {errors[name] && <Text variant="error">{error?.value.message.toString()}</Text>}
    </Box>
  );
};

export default SelectForm;
