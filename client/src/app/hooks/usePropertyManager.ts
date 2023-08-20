import { useContext } from 'react';
import { PropertyContext } from '../context/PropertyContext';
import { IFilterState } from '../context/PropertyContext/types';

const usePropertyManager = () => {
  const { state: propertiesState, dispatch } = useContext(PropertyContext);
  const searchProperty = (type: keyof IFilterState, value: unknown) => {
    dispatch({ type: 'SEARCH_PROPERTY', payload: { field: type, value } });
  };
  return { propertiesState, searchProperty };
};

export default usePropertyManager;
