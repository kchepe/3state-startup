import dynamic from 'next/dynamic';
import { ITabMenu } from '@/app/common/Tabs';
import { IProperty } from '@/app/types/types';
import Box from '@/app/common/Box';
import Amenities from './Components/Amenities';

const Map = dynamic(() => import('@/app/common/Map'), {
  ssr: false,
  loading: () => <Box className="text-center p-4">Loading Map...</Box>,
});

const tabMenu = (property: IProperty): ITabMenu[] => [
  {
    label: 'Location',
    child: (
      <Box className="w-full h-[500px]">
        <Map properties={[property]} zoom={15} />
      </Box>
    ),
  },
  { label: 'Amenities', child: <Amenities amenities={property.amenities} /> },
];

export default tabMenu;
