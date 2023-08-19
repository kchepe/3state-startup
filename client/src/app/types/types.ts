export type IOfferType = 'rent' | 'buy';

export interface IProperty {
  id: string;
  title: string;
  location: string;
  description: string;
  price: number;
  bedRoom: number;
  status: IOfferType;
  landSize: string;
  floorArea: string;
  imageUrl: string[];
  layoutUrl: string[];
  amenities: string[];
}

export type IPropertyType = 'land' | 'condominium' | 'house' | 'any' | 'apartment' | 'commercial';

export type IUserType = 'broker' | 'owner' | 'agent' | 'brokerage';

export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: IUserType;
  password: string;
  phoneNumber: string;
  imageUrl: string;
}
