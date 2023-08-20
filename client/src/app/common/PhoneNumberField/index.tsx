import clsx from 'clsx';
import React, { FC, ReactElement } from 'react';
import { PatternFormat, NumericFormatProps } from 'react-number-format';

export interface PhoneNumberFieldProps extends NumericFormatProps {
  label?: string;
  className?: string;
  outlined?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

const PhoneNumberField: FC<PhoneNumberFieldProps> = ({
  label,
  className,
  outlined = false,
  startIcon,
  endIcon,
  ...inputProps
}) => (
  <div className="w-full">
    {label && (
      <label className="block text-sm font-medium leading-6 text-gray-900 mb-1" htmlFor="inputText">
        {label}
      </label>
    )}
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {startIcon}
      </div>
      <PatternFormat
        id="inputText"
        format="(####) ### ####"
        allowEmptyFormatting
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
          },
        )}
        {...inputProps}
      />
      {endIcon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">{endIcon}</div>
      )}
    </div>
  </div>
);

export default PhoneNumberField;
