import { Dispatch } from 'react';
import { IPropertyType } from '@/app/types/types';

interface IFilterState {
  searchString: string;
  showMap: boolean;
  propertyType: IPropertyType;
  bedrooms: number;
  bathrooms: number;
}

export interface IPropertyState {
  filter: IFilterState;
}

export type PropertyActions = {
  type: 'SEARCH_PROPERTY';
  payload: { field: keyof IFilterState; value: unknown };
};

export interface IPropertyContextProps {
  state: IPropertyState;
  dispatch: Dispatch<PropertyActions>;
}
