import { IProperty } from '../types/types';

const getPropertyFullAddress = (property: IProperty) =>
  `${property.address}, ${property.barangay}, ${property.city}, ${property.province}`;

export default getPropertyFullAddress;
