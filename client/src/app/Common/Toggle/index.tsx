/* eslint-disable max-len */

'use client';

import React, { FC } from 'react';
import { Switch } from '@headlessui/react';

interface ToggleProps {
  label?: string;
  onChange: () => void;
  checked: boolean;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Toggle: FC<ToggleProps> = ({ label, onChange, checked }) => (
  <div className="flex items-center gap-2">
    {label && <span>{label}</span>}
    <Switch
      checked={checked}
      onChange={onChange}
      className={classNames(
        checked ? 'bg-primary' : 'bg-gray-200',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out',
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          checked ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
        )}
      />
    </Switch>
  </div>
);

export default Toggle;
