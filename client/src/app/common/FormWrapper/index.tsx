import { FC, ReactNode } from 'react';
import Box from '../Box';
import Text from '../Text';

interface FormWrapperProps {
  children: ReactNode;
  title: string;
}

const FormWrapper: FC<FormWrapperProps> = ({ children, title }) => (
  <Box className="grid grid-cols-12 gap-2 py-6 border-b">
    <Box className="col-span-6">
      <Text variant="h6">{title}</Text>
    </Box>
    <Box className="col-span-6">{children}</Box>
  </Box>
);

export default FormWrapper;
