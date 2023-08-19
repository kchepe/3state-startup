import { FC } from 'react';
import { TiLocation } from 'react-icons/ti';
import { BiBed } from 'react-icons/bi';
import { TbCurrencyPeso } from 'react-icons/tb';
import { PiHouseLineFill } from 'react-icons/pi';
import Link from 'next/link';
import Image from 'next/image';
import { IProperty } from '@/app/types/types';

interface PropertyCardProps {
  property: IProperty;
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => (
  <div className="grid grid-cols-12 gap-1">
    <div className="col-span-full mb-2">
      <div className="w-full overflow-hidden rounded-3xl">
        <div className="w-full h-60 overflow-hidden">
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
        </div>
      </div>
    </div>
    <div className="col-span-full flex justify-between">
      <Link href={`/property/${property.status}/${property.id}`}>
        <div className="max-w-[250px] max-h-10 line-clamp-2">
          <h4 className="hover:text-gray-500 cursor-pointer font-semibold">{property.title}</h4>
        </div>
      </Link>
      <div className="flex">
        <TbCurrencyPeso className="font-extrabold text-lg" />
        <span className="font-extrabold">{property.price.toLocaleString('en-US')}</span>
      </div>
    </div>
    <div className="col-span-full flex text-gray-500 items-center gap-1">
      <TiLocation className="text-lg" />
      <span>{property.location}</span>
    </div>
    <div className="col-span-full flex items-center gap-3">
      <div className="flex item-center gap-1">
        <BiBed />
        <span className="text-xs">{property.bedRoom} Bedroom</span>
      </div>
      <div className="flex item-center gap-1">
        <PiHouseLineFill />
        <span className="text-xs">{property.floorArea}</span>
      </div>
    </div>
  </div>
);

export default PropertyCard;
