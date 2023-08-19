import dynamic from 'next/dynamic';
import { ITabMenu } from '@/app/Common/Tabs';
import { IProperty } from '@/app/types/types';
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
      <div className="w-full h-[500px]">
        <Location />
      </div>
    ),
  },
  {
    label: 'Floor Layout',
    child: <FloorLayout layoutUrl={property.layoutUrl} />,
  },
];

export default tabMenu;
