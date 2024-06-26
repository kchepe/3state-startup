import { LatLngTuple } from 'leaflet';

export const SERVER_URL = process.env.GRAPHQL_ENDPOINT_SERVER as string;
export const CLIENT_URL = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_CLIENT as string;

export const housingMethods = ['Rent', 'Buy'];

export const propertyTypeOptions = [
  { label: 'Any', value: 'any' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Land', value: 'land' },
  { label: 'House', value: 'house' },
  { label: 'Apartment', value: 'apartment' },
  { label: 'Condominium', value: 'condominium' },
];

export const propertyStatus = [
  { label: 'For Sale', value: 'forSale' },
  { label: 'For Rent', value: 'forRent' },
];

export const selectDefaultValue = {
  label: '',
  value: '',
};

export const amenities = [
  'Alarm System',
  'Broadband Internet',
  'Air Conditioning',
  'Pantry',
  'Fire Alarm',
];
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const defaultCenterMapLocation = [10.3338, 123.8941] as LatLngTuple;
