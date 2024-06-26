import clsx from 'clsx';
import React, { ForwardRefRenderFunction, ReactElement, forwardRef } from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import Box from '../Box';
import Text from '../Text';

export interface NumberFieldProps extends NumericFormatProps {
  label?: string;
  className?: string;
  outlined?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  contained?: boolean;
}

const NumberField: ForwardRefRenderFunction<NumericFormatProps, NumberFieldProps> = (
  { label, className, outlined = false, startIcon, endIcon, contained, ...inputProps },
  ref,
) => (
  <Box className="w-full">
    {label && (
      <Text className="block text-sm font-medium leading-6 text-gray-900 mb-1">{label}</Text>
    )}
    <Box className="relative">
      <Box className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {startIcon}
      </Box>
      <NumericFormat
        thousandSeparator=","
        getInputRef={ref}
        autoComplete="off"
        className={clsx(
          className,
          'w-full p-4 rounded text-gray-800',
          ' placeholder:text-gray-400 placeholder:text-xs',
          {
            'pl-9': startIcon,
            'pl-[17px]': !startIcon,
            'pr-9': endIcon,
            'pr-[17px]': !endIcon,
            'border focus:ring-1 focus:ring-inset focus:ring-primary': outlined,
            'border-none focus:outline-none': !outlined,
            'bg-gray-100': contained,
          },
        )}
        {...inputProps}
      />
      {endIcon && (
        <Box className="absolute inset-y-0 right-0 flex items-center pr-3">{endIcon}</Box>
      )}
    </Box>
  </Box>
);

export default forwardRef(NumberField);
