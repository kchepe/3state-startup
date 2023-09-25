import { FC, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Check from '@/app/icons/Check';
import ChevronDown from '@/app/icons/ChevronDown';
import Box from '../Box';
import Text from '../Text';

export interface IOption {
  label: string;
  value: string;
}

export interface SelectProps {
  options: IOption[];
  value?: IOption;
  onChange?: (value: IOption) => void;
  className?: string;
  label?: string;
  name?: string;
  contained?: boolean;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Select: FC<SelectProps> = ({
  options = [],
  value = { label: '', value: '' },
  onChange,
  className,
  label = '',
  name,
  contained,
}) => (
  <Box className="w-full">
    {label && (
      <label className="block text-sm font-medium leading-6 text-gray-900 mb-1" htmlFor="inputText">
        {label}
      </label>
    )}
    <Listbox value={value} onChange={onChange} name={name}>
      {({ open }) => (
        <Box className="relative">
          <Listbox.Button
            className={clsx(
              className,
              'relative w-full cursor-default rounded-md py-3 pl-3 pr-10 text-left text-gray-900',
              'shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6',
              {
                'bg-gray-100': contained,
              },
            )}
          >
            <Text
              className={clsx('block truncate', {
                'text-gray-500': !value,
              })}
            >
              {value && value.label ? value.label : 'Select here...'}
            </Text>
            <Text className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDown />
            </Text>
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="absolute z-10 mt-1 max-h-60 w-full
            overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black
            ring-opacity-5 focus:outline-none sm:text-sm"
            >
              {options.map((option, index) => (
                <Listbox.Option
                  key={`${option.value}${index + 1}`}
                  className={({ active }) =>
                    classNames(
                      active ? 'bg-primary text-white' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-3 pr-9',
                    )
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <>
                      <Text
                        className={classNames(
                          selected ? 'font-semibold' : 'font-normal',
                          'block truncate',
                        )}
                      >
                        {option.label}
                      </Text>

                      {selected ? (
                        <Text
                          className={classNames(
                            active ? 'text-white' : 'text-primary',
                            'absolute inset-y-0 right-0 flex items-center pr-4',
                          )}
                        >
                          <Check className="w-4 h-4" aria-hidden="true" />
                        </Text>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Box>
      )}
    </Listbox>
  </Box>
);

export default Select;
