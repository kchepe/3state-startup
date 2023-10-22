'use client';

import React, { FC, useLayoutEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import usePropertyManager from '@/app/hooks/usePropertyManager';
import Box from '@/app/common/Box';
// import PropertyCard from './Components/PropertyCard';
import SearchField from './Components/SearchField';

interface PropertyListProps {}

const PropertyList: FC<PropertyListProps> = () => {
  const { propertiesState } = usePropertyManager();
  const divRef = useRef<HTMLDivElement>(null);
  const [currentWidth, setCurrentWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window === 'undefined' ? 0 : window.innerWidth,
  );

  useLayoutEffect(() => {
    if (divRef.current) {
      setCurrentWidth(divRef.current.clientWidth);
    }
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [currentWidth, windowWidth, propertiesState.filter.showMap]);

  return (
    <Box className="grid grid-cols-12 gap-3 relative" ref={divRef}>
      <SearchField currentWidth={currentWidth} />
      <Box
        className={clsx('col-span-full grid grid-cols-card-list gap-8', {
          'mt-auto': currentWidth === 0,
          'mt-28': currentWidth !== 0,
        })}
      >
        {/* {properties.map((property) => (
          <Box key={property.id} className="col-span-1">
            <PropertyCard property={property} />
          </Box>
        ))} */}
      </Box>
    </Box>
  );
};

export default PropertyList;
