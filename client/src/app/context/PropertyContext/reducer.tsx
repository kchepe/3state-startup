import { IPropertyState, PropertyActions } from './types';

const PropertyReducer = (state: IPropertyState, action: PropertyActions): IPropertyState => {
  const { type, payload } = action;

  switch (type) {
    case 'SEARCH_PROPERTY': {
      const stateCopy = { ...state };
      stateCopy.filter[payload.field] = payload.value as never;
      return stateCopy;
    }
    default:
      throw new Error('Invalid action passed to Property reducer');
  }
};

export default PropertyReducer;
