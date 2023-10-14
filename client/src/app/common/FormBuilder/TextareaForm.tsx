import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { clsx } from 'clsx';
import Textarea, { TextareaProps } from '../Textarea';
import Box from '../Box';
import Text from '../Text';

interface TextareaFormProps extends TextareaProps {
  name: string;
}

const TextareaForm: FC<TextareaFormProps> = ({ name, ...inputProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...textareaField } }) => (
          <Textarea
            className={clsx({
              'border-red-500 bg-red-500 bg-opacity-20': errors[name],
            })}
            {...textareaField}
            {...inputProps}
          />
        )}
      />
      {errors[name] && <Text variant="error">{errors[name]?.message?.toString()}</Text>}
    </Box>
  );
};

export default TextareaForm;
