import dynamic from 'next/dynamic';
import { ITabMenu } from '@/app/common/Tabs';
import { IProperty } from '@/app/types/types';
import Box from '@/app/common/Box';
import Amenities from './Components/Amenities';

const Map = dynamic(() => import('@/app/common/Map'), {
  ssr: false,
  loading: () => <Box className="text-center p-4">Loading Map...</Box>,
});

const PropertyCardPopup = dynamic(() => import('@/app/common/PropertyCardPopup'), {
  ssr: false,
});

const tabMenu = (property: IProperty): ITabMenu[] => [
  {
    label: 'Location',
    child: (
      <Box className="w-full h-[500px]">
        <Map center={[+property.longitude, +property.latitude]} zoom={15}>
          <PropertyCardPopup property={property} />
        </Map>
      </Box>
    ),
  },
  { label: 'Amenities', child: <Amenities amenities={property.amenities} /> },
];

export default tabMenu;
