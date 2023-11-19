import React, { FC } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import clsx from 'clsx';
import CloseCircleFill from '@/app/icons/CloseCircleFill';
import TextField, { TextFieldProps } from '../TextField';
import Box from '../Box';
import Text from '../Text';

interface InputFormProps extends TextFieldProps {
  name: string;
}

const InputForm: FC<InputFormProps> = ({ name, ...inputProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { endIcon, ...restProps } = inputProps;

  const { field } = useController({ name, control });

  return (
    <Box>
      <TextField
        outlined
        endIcon={!endIcon && errors[name] ? <CloseCircleFill className="text-red-500" /> : endIcon}
        {...field}
        {...restProps}
        className={clsx({
          'border-red-500 bg-red-500 bg-opacity-20': errors[name],
        })}
      />

      {errors[name] && <Text variant="error">{errors[name]?.message?.toString()}</Text>}
    </Box>
  );
};

export default InputForm;
