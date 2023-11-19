import React, { FC } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import clsx from 'clsx';
import CloseCircleFill from '@/app/icons/CloseCircleFill';
import NumberField, { NumberFieldProps } from '../NumberField';
import Box from '../Box';
import Text from '../Text';

interface InputNumberProps extends NumberFieldProps {
  name: string;
}

const InputNumber: FC<InputNumberProps> = ({ name, ...inputProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { field } = useController({ name, control });

  return (
    <Box>
      <NumberField
        outlined
        {...field}
        {...inputProps}
        className={clsx({
          'border-red-500 bg-red-500 bg-opacity-20': errors[name],
        })}
        endIcon={errors[name] && <CloseCircleFill className="text-red-500" />}
      />

      {errors[name] && <Text variant="error">{errors[name]?.message?.toString()}</Text>}
    </Box>
  );
};

export default InputNumber;
