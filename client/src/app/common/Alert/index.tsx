'use client';

import { IoClose, IoCloseCircleSharp } from 'react-icons/io5';
import { BsCheckCircleFill } from 'react-icons/bs';
import { PiWarningCircleFill } from 'react-icons/pi';
import React, { FC, useContext, useEffect } from 'react';
import clsx from 'clsx';
import { NotificationContext } from '@/app/context/NotificationContext';

export type ISeverity = 'error' | 'info' | 'success';

interface AlertProps {
  alwaysShow?: boolean;
  timeout?: number;
}

const Alert: FC<AlertProps> = ({ alwaysShow = false, timeout = 2500 }) => {
  const {
    state: { show, severity, message },
    dispatch,
  } = useContext(NotificationContext);

  useEffect(() => {
    if (show && !alwaysShow) {
      const time = setTimeout(() => dispatch({ type: 'HIDE_NOTIFICATION' }), timeout);
      return () => clearTimeout(time);
    }
    return undefined;
  }, [show, alwaysShow, timeout, dispatch]);

  const severityIcon = {
    success: <BsCheckCircleFill className="h-5 w-5 text-green-400" aria-hidden="true" />,
    error: <IoCloseCircleSharp className="h-5 w-5 text-red-400" aria-hidden="true" />,
    info: <PiWarningCircleFill className="h-5 w-5 text-blue-400" aria-hidden="true" />,
  };

  const isMatchSeverity = (given: ISeverity): boolean => severity === given;

  return (
    <div
      className={clsx('rounded-md p-4', show ? 'block' : 'hidden', {
        'bg-green-50': isMatchSeverity('success'),
        'bg-red-50': isMatchSeverity('error'),
        'bg-blue-50': isMatchSeverity('info'),
      })}
    >
      <div className="flex">
        <div className="flex-shrink-0">{severityIcon[severity]}</div>
        <div className="ml-3">
          <p
            className={clsx('text-sm font-medium', {
              'text-red-800': isMatchSeverity('error'),
              'text-blue-800': isMatchSeverity('info'),
              'text-green-500': isMatchSeverity('success'),
            })}
          >
            {message}
          </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              onClick={() => dispatch({ type: 'HIDE_NOTIFICATION' })}
              className={clsx('inline-flex rounded-md p-1.5', {
                'text-blue-500 hover:bg-blue-100 bg-blue-50': isMatchSeverity('info'),
                'text-red-500 hover:bg-red-100 bg-red-50': isMatchSeverity('error'),
                'text-green-500 hover:bg-green-100 bg-green-50': isMatchSeverity('success'),
              })}
            >
              <span className="sr-only">Dismiss</span>
              <IoClose className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
