import React, { FC, ReactNode } from 'react';
import Box from '../Box';
import Text from '../Text';

interface DashboardWrapperProps {
  children: ReactNode;
  title: string;
  subHeader?: string | ReactNode;
}

const DashboardWrapper: FC<DashboardWrapperProps> = ({ children, title, subHeader }) => (
  <Box>
    <Box className="py-2 border-b border-primary mb-4 flex items-center justify-between">
      <Text variant="h5">{title}</Text>
      {subHeader}
    </Box>
    <Box>{children}</Box>
  </Box>
);

export default DashboardWrapper;
