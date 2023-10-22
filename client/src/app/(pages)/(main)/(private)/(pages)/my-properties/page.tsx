import React from 'react';
import Link from 'next/link';
import Button from '@/app/common/Button';
import DashboardWrapper from '@/app/common/DashboardWrapper';
import Box from '@/app/common/Box';
import ProfileInformation from './components/ProfileInformation';
import MyPropertyCards from './components/MyPropertyCards';

const MyProperties = async () => (
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
      <MyPropertyCards />
    </DashboardWrapper>
  </Box>
);

export default MyProperties;
