/* eslint-disable react/button-has-type */
import React, { ComponentProps, FC, ReactNode } from 'react';
import clsx from 'clsx';
import { Color, Size, IButtonColor } from './types';

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  color?: Color;
  className?: string;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  color = 'transparent',
  className = '',
  size = 'medium',
  fullWidth = false,
  loading = false,
  ...buttonProps
}) => {
  const buttonColor: IButtonColor = {
    primary: `${
      buttonProps.disabled
        ? 'bg-white border-secondary text-gray-500 border'
        : 'text-white bg-primary hover:bg-primary_hover'
    }`,
    secondary: `${
      buttonProps.disabled
        ? 'bg-white text-gray-500 border-secondary border'
        : 'text-primary bg-secondary hover:bg-gray-200'
    }`,
    transparent: `${buttonProps.disabled ? 'text-gray-400' : ''}`,
  };

  const buttonSize = {
    normal: 'p-0',
    small: 'px-3 py-1',
    medium: 'px-4 py-2',
    large: 'px-5 py-3',
  };

  return (
    <button
      className={clsx(className, buttonColor[color], buttonSize[size], 'rounded', {
        'w-full': fullWidth,
        'w-auto': !fullWidth,
        'cursor-pointer': !buttonProps.disabled,
      })}
      {...buttonProps}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
