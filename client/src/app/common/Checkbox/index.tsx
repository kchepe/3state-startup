'use client';

import React, { FC, ChangeEventHandler } from 'react';
import { FiCheck } from 'react-icons/fi';

interface CheckboxProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
  label?: string;
}

const Checkbox: FC<CheckboxProps> = ({ handleChange, checked, label }) => (
  <div>
    <label className="flex gap-2 items-center" htmlFor="checkbox">
      <div className="relative h-[15px] w-[15px] border rounded border-gray-300">
        <input
          type="checkbox"
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
      {label && <span>{label}</span>}
    </label>
  </div>
);

export default Checkbox;
