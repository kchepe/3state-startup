import React, { FC, ReactNode } from 'react';
import Navbar from '@/app/Common/Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <div>
    <Navbar />
    <div className="px-2 sm:px-6 lg:px-8 mt-16 py-4 text-sm">{children}</div>
  </div>
);

export default MainLayout;
