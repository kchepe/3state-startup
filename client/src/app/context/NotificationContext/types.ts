import { Dispatch } from 'react';
import { ISeverity } from '@/app/common/Notifications/contant';

export interface INotificationState {
  message: string;
  severity: ISeverity;
  show: boolean;
}

export type NotificationActions =
  | {
      type: 'SHOW_NOTIFICATION';
      payload: { message: string; severity: ISeverity };
    }
  | {
      type: 'HIDE_NOTIFICATION';
    }
  | {
      type: 'SHOW_SERVER_ERROR';
    };

export interface INotificationContextProps {
  state: INotificationState;
  dispatch: Dispatch<NotificationActions>;
}
