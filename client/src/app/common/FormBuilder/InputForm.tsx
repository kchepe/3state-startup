import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
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
  return (
    <Box>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...inputField } }) => (
          <TextField
            outlined
            {...inputField}
            {...inputProps}
            className={clsx({
              'border-red-500 bg-red-500 bg-opacity-20': errors[name],
            })}
            endIcon={errors[name] && <CloseCircleFill className="text-red-500" />}
          />
        )}
      />
      {errors[name] && <Text variant="error">{errors[name]?.message?.toString()}</Text>}
    </Box>
  );
};

export default InputForm;
