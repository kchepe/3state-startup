import * as yup from 'yup';

export const addPropertyInitialValues = {
  title: '',
  description: '',
  housingMethod: { label: '', value: '' },
  type: { label: '', value: '' },
  price: '',
  lotAreaInSqm: 0,
  floorAreaInSqm: 0,
  bathroom: 0,
  parkingSpace: 0,
  furnishing: { label: '', value: '' },
  balcony: { label: '', value: '' },
  longitude: '',
  latitude: '',
  address: '',
  province: { label: '', value: '' },
  city: { label: '', value: '' },
  barangay: { label: '', value: '' },
  zipCode: '',
  amenities: [],
};

export const addPropertySchema = yup.object().shape({
  title: yup.string(),
  description: yup.string(),
  housingMethod: yup.object().shape({
    label: yup.string(),
    value: yup.string(),
  }),
  type: yup.object().shape({
    label: yup.string(),
    value: yup.string(),
  }),
  price: yup.string(),
  lotAreaInSqm: yup
    .number()
    .typeError('Lot Area must be a number')
    .min(0, 'Lot Area cannot be less than zero.'),
  floorAreaInSqm: yup
    .number()
    .typeError('Floor Area must be a number')
    .min(0, 'Floor Area cannot be less than zero.'),
  bathroom: yup
    .number()
    .typeError('Number of bathroom must be a number')
    .min(0, 'Number of bathroom cannot be less than zero.'),
  parkingSpace: yup
    .number()
    .typeError('Parking space must be a number')
    .min(0, 'Parking space cannot be less than zero.'),
  furnishing: yup.object().shape({
    label: yup.string(),
    value: yup.string(),
  }),
  balcony: yup.object().shape({
    label: yup.string(),
    value: yup.string(),
  }),
  longitude: yup.string(),
  latitude: yup.string(),
  address: yup.string(),
  province: yup.object().shape({
    label: yup.string(),
    value: yup.string(),
  }),
  city: yup.object().shape({
    label: yup.string(),
    value: yup.string(),
  }),
  barangay: yup.object().shape({
    label: yup.string(),
    value: yup.string(),
  }),
  zipCode: yup.string(),
  amenities: yup.array().of(yup.string()),
});
