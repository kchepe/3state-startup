import * as yup from 'yup';

export const addPropertyInitialValues = {
  price: '',
  phone: '',
};

export const addPropertySchema = yup.object().shape({
  price: yup.string(),
  phone: yup.string(),
});
