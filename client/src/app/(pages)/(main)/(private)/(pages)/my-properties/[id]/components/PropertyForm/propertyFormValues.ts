import * as yup from 'yup';

export const addPropertyInitialValues = {
  title: '',
  description: '',
  housingMethod: { label: '', value: '' },
  type: { label: '', value: '' },
  price: '',
  lotArea: '',
  floorArea: '',
  bathroom: '',
  parking: '',
  furnishing: '',
  balcony: '',
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
  lotArea: yup.string(),
  floorArea: yup.string(),
  bathroom: yup.string(),
  parking: yup.string(),
  furnishing: yup.string(),
  balcony: yup.string(),
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
