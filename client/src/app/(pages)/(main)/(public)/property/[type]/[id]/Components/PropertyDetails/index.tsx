import { FC } from 'react';
import { TiLocation } from 'react-icons/ti';
import { TbCurrencyPeso } from 'react-icons/tb';
import { BiBed } from 'react-icons/bi';
import { PiHouseLineFill } from 'react-icons/pi';
import { GiPoland } from 'react-icons/gi';
import { IProperty } from '@/app/types/types';

interface PropertyDetailsProps {
  property: IProperty;
}

const PropertyDetails: FC<PropertyDetailsProps> = ({ property }) => (
  <div className="flex flex-col gap-2">
    <div>
      <span className="font-bold text-xl">{property.title}</span>
    </div>
    <div className="flex items-center gap-2 font-bold text-xl">
      <TbCurrencyPeso />
      <span>{property.price.toLocaleString('en-US')}</span>
    </div>
    <div className="flex items-center gap-2">
      <TiLocation />
      <span className="text-gray-700">{property.location}</span>
    </div>
    <div>
      <p className="text-justify">{property.description}</p>
    </div>
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <div className="flex item-center gap-1">
        <BiBed className="text-lg" />
        <span>{property.bedRoom} Bedroom</span>
      </div>
      <div className="flex item-center gap-1">
        <PiHouseLineFill className="text-lg" />
        <span>{property.floorArea} Floor Area</span>
      </div>
      <div className="flex item-center gap-1">
        <GiPoland className="text-lg" />
        <span>{property.landSize} Land Area</span>
      </div>
    </div>
  </div>
);

export default PropertyDetails;
