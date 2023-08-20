import * as yup from 'yup';

export const addPropertyInitialValues = {
  price: '',
  phone: '',
  housingMethod: { label: '', value: '' },
};

export const addPropertySchema = yup.object().shape({
  price: yup.string(),
  phone: yup.string(),
  housingMethod: yup.object().shape({
    label: yup.string(),
    value: yup.string(),
  }),
});
