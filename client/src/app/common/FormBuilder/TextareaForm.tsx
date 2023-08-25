import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
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
        render={({ field }) => <Textarea {...field} {...inputProps} />}
      />
      {errors[name] && (
        <Text className="text-[10px] ml-4 text-red-600">{errors[name]?.message?.toString()}</Text>
      )}
    </Box>
  );
};

export default TextareaForm;
