import dynamic from 'next/dynamic';
import { ITabMenu } from '@/app/common/Tabs';
import { IProperty } from '@/app/types/types';
import Box from '@/app/common/Box';
import Amenities from './Components/Amenities';
import FloorLayout from './Components/FloorLayout';

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
  {
    label: 'Floor Layout',
    child: <FloorLayout layoutUrl={property.layoutUrl} />,
  },
];

export default tabMenu;
