import clsx from 'clsx';
import React, { FC, InputHTMLAttributes } from 'react';

export interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
  contained?: boolean;
  rows?: number;
}

const Textarea: FC<TextareaProps> = ({ label, className, contained, rows = 5, ...inputProps }) => (
  <div className="w-full">
    {label && (
      <label className="block text-sm font-medium leading-6 text-gray-900 mb-1" htmlFor="inputText">
        {label}
      </label>
    )}
    <textarea
      id="inputText"
      rows={rows}
      autoComplete="off"
      className={clsx(
        className,
        'w-full p-4 rounded text-gray-800 resize-none',
        'placeholder:text-gray-400 placeholder:text-xs ',
        'border focus:ring-1 focus:ring-inset focus:ring-primary',
        {
          'bg-gray-100': contained,
        },
      )}
      {...inputProps}
    />
  </div>
);

export default Textarea;
