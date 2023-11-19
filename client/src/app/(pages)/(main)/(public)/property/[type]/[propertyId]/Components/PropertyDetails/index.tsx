import { FC } from 'react';
import { IProperty } from '@/app/types/types';
import Box from '@/app/common/Box';
import Text from '@/app/common/Text';
import Peso from '@/app/icons/Peso';
import Location from '@/app/icons/Location';
import Square from '@/app/icons/Square';
import getPropertyFullAddress from '@/app/utils/fullAddress.util';

interface PropertyDetailsProps {
  property: IProperty;
}

const PropertyDetails: FC<PropertyDetailsProps> = ({ property }) => (
  <Box className="flex flex-col gap-2">
    <Box>
      <Text variant="h4">{property.title}</Text>
    </Box>
    <Box className="flex items-center gap-1 font-bold text-xl">
      <Peso className="w-6 h-6" />
      <Text>{property.price}</Text>
    </Box>
    <Box className="flex items-center gap-2">
      <Location className="text-gray-400" />
      <Text variant="subtitle">{getPropertyFullAddress(property)}</Text>
    </Box>
    <Box>
      <Text className="text-justify">{property.description}</Text>
    </Box>
    <Box className="flex flex-col sm:flex-row sm:items-center gap-3">
      <Box className="flex item-center gap-2">
        <Square className="mt-0.5" />
        <Text>{property.floorAreaInSqm} Floor Area</Text>
      </Box>
      <Box className="flex item-center gap-2">
        <Square className="mt-0.5" />
        <Text>{property.lotAreaInSqm} Land Area</Text>
      </Box>
    </Box>
  </Box>
);

export default PropertyDetails;
