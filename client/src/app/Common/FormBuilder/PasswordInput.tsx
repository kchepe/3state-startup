'use client';

import React, { FC, useState } from 'react';
import { BiLockAlt } from 'react-icons/bi';
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';
import InputForm from './InputForm';

interface PasswordInputProps {
  label?: string;
  name: string;
  placeholder?: string;
}

const PasswordInput: FC<PasswordInputProps> = ({ label = '', name, placeholder = '' }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <InputForm
      name={name}
      label={label}
      type={showPassword ? 'text' : 'password'}
      placeholder={placeholder}
      startIcon={<BiLockAlt className="text-primary text-lg" />}
      endIcon={
        showPassword ? (
          <PiEyeBold className="text-lg cursor-pointer" aria-hidden onClick={handleShowPassword} />
        ) : (
          <PiEyeClosedBold
            className="text-lg cursor-pointer"
            aria-hidden
            onClick={handleShowPassword}
          />
        )
      }
    />
  );
};

export default PasswordInput;
