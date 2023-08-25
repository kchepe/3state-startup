import React, { FC, ReactNode } from 'react';
import Navbar from '@/app/common/Navbar';
import Box from '@/app/common/Box';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <Box>
    <Navbar />
    <Box className="px-2 sm:px-6 lg:px-8 mt-16 py-4 text-sm">{children}</Box>
  </Box>
);

export default MainLayout;
