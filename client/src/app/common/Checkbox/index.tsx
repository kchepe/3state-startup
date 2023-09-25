'use client';

import React, { FC, ChangeEventHandler } from 'react';
import Check from '@/app/icons/Check';
import Text from '../Text';
import Box from '../Box';

interface CheckboxProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
  label?: string;
  id?: string;
}

const Checkbox: FC<CheckboxProps> = ({ handleChange, checked, label, id }) => (
  <Box>
    <label className="flex gap-2 items-center cursor-pointer" htmlFor={id}>
      <Box className="relative h-[15px] w-[15px] border rounded border-gray-300">
        <input
          type="checkbox"
          id={id}
          className="opacity-0 focus:ring-transparent cursor-pointer h-[15px] w-[15px]"
          onChange={handleChange}
          checked={checked}
        />
        {checked && (
          <Box
            className="pointer-events-none absolute -top-[1px] -left-[1px] bg-primary
            h-[15px] w-[15px] rounded flex items-center justify-center"
          >
            <Check className="text-white h-3 w-3" />
          </Box>
        )}
      </Box>
      {label && <Text>{label}</Text>}
    </label>
  </Box>
);

export default Checkbox;
