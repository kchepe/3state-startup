import dynamic from 'next/dynamic';
import { ITabMenu } from '@/app/common/Tabs';
import { IProperty } from '@/app/types/types';
import Box from '@/app/common/Box';
import Amenities from './Components/Amenities';

const Location = dynamic(() => import('./Components/Location'), {
  ssr: false,
});

const tabMenu = (property: IProperty): ITabMenu[] => [
  { label: 'Amenities', child: <Amenities amenities={property.amenities} /> },
  {
    label: 'Location',
    child: (
      <Box className="w-full h-[500px]">
        <Location />
      </Box>
    ),
  },
];

export default tabMenu;
