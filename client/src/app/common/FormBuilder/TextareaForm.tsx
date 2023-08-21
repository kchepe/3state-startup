import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Textarea, { TextareaProps } from '../Textarea';

interface TextareaFormProps extends TextareaProps {
  name: string;
}

const TextareaForm: FC<TextareaFormProps> = ({ name, ...inputProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Textarea {...field} {...inputProps} />}
      />
      {errors[name] && (
        <span className="text-[10px] ml-4 text-red-600">{errors[name]?.message?.toString()}</span>
      )}
    </div>
  );
};

export default TextareaForm;
