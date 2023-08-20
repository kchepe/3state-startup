import { GiHouse } from 'react-icons/gi';
import { MdApartment } from 'react-icons/md';
import { BsHouseHeartFill, BsBuildingFillCheck } from 'react-icons/bs';
import { BiSolidBuildingHouse } from 'react-icons/bi';
import { RiMapPin5Fill } from 'react-icons/ri';

export const propertyTypes = [
  { label: 'Any', icon: <BsHouseHeartFill /> },
  { label: 'House', icon: <GiHouse /> },
  { label: 'Land', icon: <RiMapPin5Fill /> },
  { label: 'Apartment', icon: <MdApartment /> },
  { label: 'Commercial', icon: <BsBuildingFillCheck /> },
  { label: 'Condominium', icon: <BiSolidBuildingHouse /> },
];

export const housingMethods = ['Rent', 'Buy'];

export const propertyTypeOptions = [
  { label: 'Any', value: 'any' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Land', value: 'land' },
  { label: 'House', value: 'house' },
  { label: 'Apartment', value: 'apartment' },
  { label: 'Condominium', value: 'condominium' },
];

export const propertyCategory = [
  { label: 'For Sale', value: 'for sale' },
  { label: 'For Rent', value: 'for rent' },
];

export const ammenities = [
  'Alarm System',
  'Broadband Internet',
  'Air Conditioning',
  'Pantry',
  'Fire Alarm',
];
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
