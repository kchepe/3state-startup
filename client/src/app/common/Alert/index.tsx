'use client';

import React, { FC, useEffect } from 'react';
import clsx from 'clsx';
import useNotificationManager from '@/app/hooks/useNotificationManager';
import CheckCircleFill from '@/app/icons/CheckCircleFill';
import Close from '@/app/icons/Close';
import CloseCircleFill from '@/app/icons/CloseCircleFill';
import WarningCircleFill from '@/app/icons/WarningCircleFill';
import Box from '../Box';
import Text from '../Text';
import Button from '../Button';

export type ISeverity = 'error' | 'info' | 'success';

interface AlertProps {
  alwaysShow?: boolean;
  timeout?: number;
}

const Alert: FC<AlertProps> = ({ alwaysShow = false, timeout = 2500 }) => {
  const {
    notificationState: { show, severity, message },
    hideNotification,
  } = useNotificationManager();
  useEffect(() => {
    if (show && !alwaysShow) {
      const time = setTimeout(() => hideNotification(), timeout);
      return () => clearTimeout(time);
    }
    return undefined;
  }, [show, alwaysShow, timeout, hideNotification]);

  const severityIcon = {
    success: <CheckCircleFill className="h-5 w-5 text-green-400" aria-hidden="true" />,
    error: <CloseCircleFill className="h-5 w-5 text-red-400" aria-hidden="true" />,
    info: <WarningCircleFill className="h-5 w-5 text-blue-400" aria-hidden="true" />,
  };

  const isMatchSeverity = (given: ISeverity): boolean => severity === given;

  return (
    <Box
      className={clsx('rounded-md p-4', show ? 'block' : 'hidden', {
        'bg-green-50': isMatchSeverity('success'),
        'bg-red-50': isMatchSeverity('error'),
        'bg-blue-50': isMatchSeverity('info'),
      })}
    >
      <Box className="flex justify-between">
        <Box className="flex items-center">
          <Box className="flex-shrink-0">{severityIcon[severity]}</Box>
          <Box className="ml-3">
            <Text
              className={clsx('font-medium', {
                'text-red-800': isMatchSeverity('error'),
                'text-blue-800': isMatchSeverity('info'),
                'text-green-500': isMatchSeverity('success'),
              })}
            >
              {message}
            </Text>
          </Box>
        </Box>
        <Box>
          <Button
            size="normal"
            onClick={hideNotification}
            className={clsx('flex rounded-md', {
              'text-blue-500 hover:bg-blue-100 bg-blue-50': isMatchSeverity('info'),
              'text-red-500 hover:bg-red-100 bg-red-50': isMatchSeverity('error'),
              'text-green-500 hover:bg-green-100 bg-green-50': isMatchSeverity('success'),
            })}
          >
            <Close className="h-5 w-5" aria-hidden="true" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Alert;
