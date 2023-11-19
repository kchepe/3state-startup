import React, { FC } from 'react';
import { useController, useFormContext } from 'react-hook-form';
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

  const { field } = useController({ name, control });
  return (
    <Box>
      <Textarea
        className={clsx({
          'border-red-500 bg-red-500 bg-opacity-20': errors[name],
        })}
        {...field}
        {...inputProps}
      />
      {errors[name] && <Text variant="error">{errors[name]?.message?.toString()}</Text>}
    </Box>
  );
};

export default TextareaForm;
