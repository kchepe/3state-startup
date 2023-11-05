export type IOfferType = 'rent' | 'buy';

export type IPropertyType = 'land' | 'condominium' | 'house' | 'any' | 'apartment' | 'commercial';

export interface IProperty {
  id: string;
  address: string;
  amenities: string[];
  images: string[];
  balcony: boolean;
  barangay: string;
  bathroom: number;
  bedroom: number;
  city: string;
  description: string;
  floorAreaInSqm: string;
  furnishing: string;
  status: string;
  latitude: string;
  longitude: string;
  lotAreaInSqm: string;
  parkingSpace: number;
  price: string;
  province: string;
  title: string;
  type: IPropertyType;
  zipCode: number;
}

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

export interface IAmenityCategories {
  id: string;
  categoryName: string;
}

export interface IAmenities {
  id: string;
  categoryId?: string;
  name: string;
}

export interface IAmenitiesWithCategory extends IAmenityCategories {
  amenities: IAmenities[];
}

export interface IBarangay {
  brgyCode: string;
  brgyName: string;
}

export interface ICity {
  cityCode: string;
  cityName: string;
  barangays?: IBarangay[];
}

export interface IProvince {
  provinceName: string;
  provinceCode: string;
  cities?: ICity[];
}
