'use client';

import React, { createContext, FC, useMemo, useReducer, ReactNode } from 'react';
import { IPropertyContextProps, IPropertyState } from './types';
import PropertyReducer from './reducer';

type IPropertyProviderProps = {
  children: ReactNode;
  initialState: IPropertyState;
};

export const initialPropertyState: IPropertyState = {
  filter: {
    searchString: '',
    propertyType: 'any',
    showMap: false,
    bedrooms: 1,
    bathrooms: 1,
  },
};

export const PropertyContext = createContext<IPropertyContextProps>({} as IPropertyContextProps);

export const PropertyProvider: FC<IPropertyProviderProps> = ({
  children,
  initialState = initialPropertyState,
}) => {
  const [state, dispatch] = useReducer(PropertyReducer, initialState);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  );

  return <PropertyContext.Provider value={value}>{children}</PropertyContext.Provider>;
};
