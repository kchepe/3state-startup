import React, { FC, ReactNode } from 'react';
import LogoImage from '../Navbar/components/LogoImage';
import Box from '../Box';

interface AuthWrapperProps {
  children: ReactNode;
}

const AuthWrapper: FC<AuthWrapperProps> = ({ children }) => (
  <Box className="md:h-screen grid grid-cols-12">
    <Box className="md:col-span-7 col-span-full">
      <Box className="h-[7vh] p-8 flex items-center">
        <LogoImage />
      </Box>
      <Box className="md:h-[93vh] flex md:items-center justify-center p-8">
        <Box className="w-[500px] md:w-[650px]">{children}</Box>
      </Box>
    </Box>
    <Box className="col-span-5 h-screen bg-black text-white hidden md:block" />
  </Box>
);

export default AuthWrapper;
