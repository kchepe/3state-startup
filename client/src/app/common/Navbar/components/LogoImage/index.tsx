import Link from 'next/link';
import React from 'react';
import Box from '@/app/common/Box';
import Text from '@/app/common/Text';

const LogoImage = () => (
  <Box className="font-black text-lg">
    <Link href="/">
      <Text className="text-primary">3State</Text>
    </Link>
  </Box>
);

export default LogoImage;
