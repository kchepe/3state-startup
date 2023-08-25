import clsx from 'clsx';
import React, { FC, InputHTMLAttributes } from 'react';
import Box from '../Box';
import Text from '../Text';

export interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
  contained?: boolean;
  rows?: number;
}

const Textarea: FC<TextareaProps> = ({ label, className, contained, rows = 5, ...inputProps }) => (
  <Box className="w-full">
    {label && <Text className="text-sm font-medium leading-6 text-gray-900 mb-1">{label}</Text>}
    <textarea
      rows={rows}
      autoComplete="off"
      className={clsx(
        className,
        'w-full p-4 rounded text-gray-800 resize-none',
        'placeholder:text-gray-400 placeholder:text-xs ',
        'border focus:ring-1 focus:ring-inset focus:ring-primary',
        {
          'bg-gray-100': contained,
        },
      )}
      {...inputProps}
    />
  </Box>
);

export default Textarea;
