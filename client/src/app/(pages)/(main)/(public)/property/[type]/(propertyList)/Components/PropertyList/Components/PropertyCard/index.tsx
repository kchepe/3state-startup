import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IProperty } from '@/app/types/types';
import Box from '@/app/common/Box';
import Text from '@/app/common/Text';
import Peso from '@/app/icons/Peso';
import Location from '@/app/icons/Location';
import Bed from '@/app/icons/Bed';
import Square from '@/app/icons/Square';

interface PropertyCardProps {
  property: IProperty;
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => (
  <Box className="grid grid-cols-12 gap-1">
    <Box className="col-span-full mb-2">
      <Box className="w-full overflow-hidden rounded-3xl">
        <Box className="w-full h-60 overflow-hidden">
          <Link href={`/property/${property.status}/${property.id}`}>
            <Image
              src={property.imageUrl[0]}
              alt="3state_property"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full object-cover rounded-3xl hover:scale-105 h-60
                transition-all duration-150 ease-in-out"
            />
          </Link>
        </Box>
      </Box>
    </Box>
    <Box className="col-span-full flex justify-between">
      <Link href={`/property/${property.status}/${property.id}`}>
        <Box className="max-w-[250px] max-h-10 line-clamp-2">
          <h4 className="hover:text-gray-500 cursor-pointer font-semibold">{property.title}</h4>
        </Box>
      </Link>
      <Box className="flex items-center">
        <Peso className="font-extrabold text-lg" />
        <Text className="font-extrabold">{property.price.toLocaleString('en-US')}</Text>
      </Box>
    </Box>
    <Box className="col-span-full flex text-gray-500 items-center gap-1">
      <Location className="w-3 h-3" />
      <Text>{property.location}</Text>
    </Box>
    <Box className="col-span-full flex items-center gap-3">
      <Box className="flex item-center gap-1">
        <Bed />
        <Text className="text-xs">{property.bedRoom} Bedroom</Text>
      </Box>
      <Box className="flex item-center gap-1">
        <Square className="w-3 h-3 mt-0.5" />
        <Text className="text-xs">{property.floorArea}</Text>
      </Box>
    </Box>
  </Box>
);

export default PropertyCard;
