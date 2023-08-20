import React from 'react';
import Link from 'next/link';
import Button from '@/app/common/Button';
import DashboardWrapper from '@/app/common/DashboardWrapper';
import ProfileInformation from './[id]/components/ProfileInformation';

const MyProperties = () => (
  <div className="flex flex-col gap-4">
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
      <div className="text-center">
        <span>No properties available.</span>
      </div>
    </DashboardWrapper>
  </div>
);

export default MyProperties;
