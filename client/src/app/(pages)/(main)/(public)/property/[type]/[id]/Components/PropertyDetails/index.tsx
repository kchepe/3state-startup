import { FC } from 'react';
import { TiLocation } from 'react-icons/ti';
import { TbCurrencyPeso } from 'react-icons/tb';
import { BiBed } from 'react-icons/bi';
import { PiHouseLineFill } from 'react-icons/pi';
import { GiPoland } from 'react-icons/gi';
import { IProperty } from '@/app/types/types';
import Box from '@/app/common/Box';
import Text from '@/app/common/Text';

interface PropertyDetailsProps {
  property: IProperty;
}

const PropertyDetails: FC<PropertyDetailsProps> = ({ property }) => (
  <Box className="flex flex-col gap-2">
    <Box>
      <Text variant="h4">{property.title}</Text>
    </Box>
    <Box className="flex items-center gap-2 font-bold text-xl">
      <TbCurrencyPeso />
      <Text>{property.price.toLocaleString('en-US')}</Text>
    </Box>
    <Box className="flex items-center gap-2">
      <TiLocation />
      <Text variant="subtitle">{property.location}</Text>
    </Box>
    <Box>
      <Text className="text-justify">{property.description}</Text>
    </Box>
    <Box className="flex flex-col sm:flex-row sm:items-center gap-3">
      <Box className="flex item-center gap-1">
        <BiBed className="text-lg" />
        <Text>{property.bedRoom} Bedroom</Text>
      </Box>
      <Box className="flex item-center gap-1">
        <PiHouseLineFill className="text-lg" />
        <Text>{property.floorArea} Floor Area</Text>
      </Box>
      <Box className="flex item-center gap-1">
        <GiPoland className="text-lg" />
        <Text>{property.landSize} Land Area</Text>
      </Box>
    </Box>
  </Box>
);

export default PropertyDetails;
