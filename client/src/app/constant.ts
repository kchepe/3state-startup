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

export const propertyCategory = [
  { label: 'For Sale', value: 'for sale' },
  { label: 'For Rent', value: 'for rent' },
];

export const amenities = [
  'Alarm System',
  'Broadband Internet',
  'Air Conditioning',
  'Pantry',
  'Fire Alarm',
];
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
