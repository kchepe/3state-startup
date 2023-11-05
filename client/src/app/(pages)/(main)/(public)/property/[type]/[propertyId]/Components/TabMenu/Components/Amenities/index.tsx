import { FC } from 'react';

interface AmenitiesProps {
  amenities: string[];
}

const Amenities: FC<AmenitiesProps> = ({ amenities }) => (
  <ul className="flex gap-3 items-center flex-wrap">
    {amenities.map((amenity) => (
      <li key={amenity} className="text-white bg-primary rounded-full py-2 px-4 text-sm">
        {amenity}
      </li>
    ))}
  </ul>
);

export default Amenities;
