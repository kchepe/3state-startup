'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import clsx from 'clsx';
import { IOfferType } from '@/app/types/types';
import usePropertyManager from '@/app/hooks/usePropertyManager';
import FilterToolBar from '../FIlterToolbar';
import PropertyList from '../PropertyList';

const LeafletMap = dynamic(() => import('../LeafletMap'), {
  ssr: false,
});

interface MainPropertyProps {
  offerType: IOfferType;
}

const MainProperty: FC<MainPropertyProps> = ({ offerType }) => {
  const { propertiesState } = usePropertyManager();

  return (
    <div className="flex gap-3 h-full">
      <div
        className="w-[370px] overflow-x-hidden scrollbar
        pr-4 xl:block h-full overflow-y-auto hidden"
      >
        <FilterToolBar offerType={offerType} />
      </div>
      <div
        className={clsx(
          'xl:overflow-x-hidden xl:scrollbar scroll-smooth flex-1 xl:h-full xl:overflow-y-auto',
          {
            'xl:pr-4': propertiesState.filter.showMap,
            'xl:pr-0': !propertiesState.filter.showMap,
          },
        )}
      >
        <PropertyList />
      </div>

      {propertiesState.filter.showMap && (
        <div className="hidden xl:block -mr-8 -my-4 flex-1">
          <LeafletMap />
        </div>
      )}
    </div>
  );
};

export default MainProperty;