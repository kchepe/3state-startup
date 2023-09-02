import React from 'react';
import { Montserrat } from 'next/font/google';
import './globals.css';
import AuthProvider from './AuthProvider';
import { NotificationProvider, initialNotificationState } from './context/NotificationContext';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: '3State',
  description: 'Property Listing',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <AuthProvider>
      <body className={`${inter.className} text-sm text-medium`}>
        <NotificationProvider initialState={initialNotificationState}>
          <main>{children}</main>
        </NotificationProvider>
      </body>
    </AuthProvider>
  </html>
);

export default RootLayout;
