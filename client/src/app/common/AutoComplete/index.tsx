'use client';

import { ForwardRefRenderFunction, forwardRef, useState } from 'react';
import { Combobox } from '@headlessui/react';
import clsx from 'clsx';
import Check from '@/app/icons/Check';
import ChevronDown from '@/app/icons/ChevronDown';
import { IOption, SelectProps } from '../Select';

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

export interface AutoCompleteProps extends SelectProps {
  outlined?: boolean;
  placeholder?: string;
  disabled?: boolean;
}

const AutoComplete: ForwardRefRenderFunction<HTMLSelectElement, AutoCompleteProps> = (
  {
    options = [],
    value = { label: '', value: '' },
    onChange,
    name = '',
    label = '',
    contained,
    outlined,
    className,
    placeholder = 'Search here',
    disabled,
  },
  ref,
) => {
  const [query, setQuery] = useState('');

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) => option.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <Combobox as="div" value={value} onChange={onChange} name={name} disabled={disabled} ref={ref}>
      {label && (
        <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900 mb-1">
          {label}
        </Combobox.Label>
      )}
      <div className="relative">
        <Combobox.Input
          autoComplete="off"
          type="search"
          placeholder={disabled ? '' : placeholder}
          className={clsx(
            className,
            'w-full rounded-md py-4 pl-4 pr-10 text-gray-900',
            'shadow-sm sm:text-sm sm:leading-6',
            {
              'bg-gray-100': contained && !disabled,
              'border focus:ring-1 focus:ring-inset focus:ring-primary': outlined,
              'border-none focus:outline-none': !outlined,
            },
          )}
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(option: IOption) => option?.label}
        />
        <Combobox.Button
          className="absolute inset-y-0 right-0 flex
        items-center rounded-r-md px-2 focus:outline-none"
        >
          <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {options.length > 0 && (
          <Combobox.Options
            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white
          py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            {filteredOptions.map((option) => (
              <Combobox.Option
                key={option.value}
                value={option}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-primary text-white' : 'text-gray-900',
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span className={classNames('block truncate', selected && 'font-semibold')}>
                      {option.label}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-primary',
                        )}
                      >
                        <Check className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};

export default forwardRef(AutoComplete);
