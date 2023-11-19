import * as yup from 'yup';
import { selectDefaultValue } from '@/app/constant';

export const addPropertyInitialValues = {
  title: '',
  description: '',
  status: selectDefaultValue,
  type: selectDefaultValue,
  price: '',
  lotAreaInSqm: 0,
  floorAreaInSqm: 0,
  bathroom: 0,
  bedroom: 0,
  parkingSpace: 0,
  furnishing: selectDefaultValue,
  balcony: selectDefaultValue,
  longitude: '',
  latitude: '',
  address: '',
  province: selectDefaultValue,
  city: selectDefaultValue,
  barangay: selectDefaultValue,
  zipCode: '',
  amenities: [],
  images: [],
};

export const addPropertySchema = yup.object().shape({
  title: yup.string().required('Title is required.'),
  description: yup.string(),
  status: yup.object().shape({
    label: yup.string().required('Status is required'),
    value: yup.string().required('Status is required'),
  }),
  type: yup.object().shape({
    label: yup.string().required('Type is required'),
    value: yup.string().required('Type is required'),
  }),
  price: yup.string().required('Price is required'),
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
  bedroom: yup
    .number()
    .typeError('Number of bathroom must be a number')
    .min(0, 'Number of bathroom cannot be less than zero.'),
  parkingSpace: yup
    .number()
    .typeError('Parking space must be a number')
    .min(0, 'Parking space cannot be less than zero.'),
  furnishing: yup
    .object()
    .shape({
      label: yup.string().required('Furnishing is required'),
      value: yup.string().required('Furnishing is required'),
    })
    .required('Furnishing is required.'),
  balcony: yup.object().shape({
    label: yup.string(),
    value: yup.string(),
  }),
  longitude: yup.string().required("Please click the property's location to get the longitude"),
  latitude: yup.string().required("Please click the property's location to get the latitude"),
  address: yup.string().required('Address is required.'),
  province: yup.object().shape({
    label: yup.string().required('Province is required'),
    value: yup.string().required('Province is required'),
  }),
  city: yup.object().shape({
    label: yup.string().required('City is required'),
    value: yup.string().required('City is required'),
  }),
  barangay: yup.object().shape({
    label: yup.string().required('Barangay is required'),
    value: yup.string().required('Barangay is required'),
  }),
  zipCode: yup.string().required('Zipcode is required.'),
  amenities: yup.array().of(yup.string()),
});
