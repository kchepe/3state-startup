/* eslint-disable max-len */

'use client';

import React, { FC } from 'react';
import { Switch } from '@headlessui/react';
import Box from '../Box';
import Text from '../Text';

interface ToggleProps {
  label?: string;
  onChange: () => void;
  checked: boolean;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Toggle: FC<ToggleProps> = ({ label, onChange, checked }) => (
  <Box className="flex items-center gap-2">
    {label && <Text>{label}</Text>}
    <Switch
      checked={checked}
      onChange={onChange}
      className={classNames(
        checked ? 'bg-primary' : 'bg-gray-200',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out',
      )}
    >
      <Text className="sr-only">Use setting</Text>
      <Text
        aria-hidden="true"
        className={classNames(
          checked ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
        )}
      />
    </Switch>
  </Box>
);

export default Toggle;
