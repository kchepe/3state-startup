import React from 'react';
import Link from 'next/link';
import Button from '@/app/common/Button';
import DashboardWrapper from '@/app/common/DashboardWrapper';
import Box from '@/app/common/Box';
import Text from '@/app/common/Text';
import ProfileInformation from './[id]/components/ProfileInformation';

const MyProperties = () => (
  <Box className="flex flex-col gap-4">
    <ProfileInformation />
    <DashboardWrapper
      title="My Properties"
      subHeader={
        <Link href="/my-properties/add-property">
          <Button color="primary" className="text-xs">
            Add Property
          </Button>
        </Link>
      }
    >
      <Box className="text-center">
        <Text>No properties available.</Text>
      </Box>
    </DashboardWrapper>
  </Box>
);

export default MyProperties;
