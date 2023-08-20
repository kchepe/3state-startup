import { FC, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { BiCheck, BiSolidChevronDown } from 'react-icons/bi';
import clsx from 'clsx';

export interface IOption {
  label: string;
  value: string | number;
}

export interface SelectProps {
  options: IOption[];
  value: IOption;
  onChange?: (value: IOption) => void;
  className?: string;
  label?: string;
  name?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Select: FC<SelectProps> = ({ options, value, onChange, className, label = '', name }) => (
  <div className="w-full">
    {label && (
      <label className="block text-sm font-medium leading-6 text-gray-900 mb-1" htmlFor="inputText">
        {label}
      </label>
    )}
    <Listbox value={value} onChange={onChange} name={name}>
      {({ open }) => (
        <div className="relative">
          <Listbox.Button
            className={`${className} relative w-full cursor-default 
          rounded-md py-3 pl-3 pr-10 text-left text-gray-900 
          shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6`}
          >
            <span
              className={clsx('block truncate', {
                'text-gray-500': !value,
              })}
            >
              {value && value.label ? value.label : 'Select here...'}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <BiSolidChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
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
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
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
                      <span
                        className={classNames(
                          selected ? 'font-semibold' : 'font-normal',
                          'block truncate',
                        )}
                      >
                        {option.label}
                      </span>

                      {selected ? (
                        <span
                          className={classNames(
                            active ? 'text-white' : 'text-indigo-600',
                            'absolute inset-y-0 right-0 flex items-center pr-4',
                          )}
                        >
                          <BiCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  </div>
);

export default Select;
