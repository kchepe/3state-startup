'use client';

import React, { FC, ChangeEventHandler } from 'react';
import { FiCheck } from 'react-icons/fi';

interface CheckboxProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ handleChange, checked }) => (
  <div className="relative h-[15px] w-[15px] border rounded border-gray-300">
    <input
      type="checkbox"
      id="checkbox"
      className="opacity-0 focus:ring-transparent cursor-pointer h-[15px] w-[15px]"
      onChange={handleChange}
      checked={checked}
    />
    {checked && (
      <div
        className="pointer-events-none absolute -top-[1px] -left-[1px] bg-primary
            h-[15px] w-[15px] rounded flex items-center justify-center"
      >
        <FiCheck className="text-white h-3 w-3" />
      </div>
    )}
  </div>
);

export default Checkbox;
