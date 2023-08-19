import * as yup from 'yup';
import { passwordRegex } from '@/app/constant';

export const userType = [
  { label: 'Broker', value: 'broker' },
  { label: 'Owner', value: 'owner' },
  { label: 'Agent', value: 'agent' },
  { label: 'Brokerage', value: 'brokerage' },
];

export const registerInitialValues = {
  email: '',
  firstName: '',
  lastName: '',
  userType: userType[0],
  password: '',
  confirmPassword: '',
  phoneNumber: '',
  imageUrl: '',
};

export const registerSchema = yup.object().shape({
  email: yup.string().email('Must be a valid email').required('Email is required'),
  firstName: yup.string().required('Firstname is required'),
  lastName: yup.string().required('Lastname is required'),
  userType: yup
    .object()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .required(),
  phoneNumber: yup.string().required('Phone number is required'),
  password: yup.string().required().min(8).matches(
    passwordRegex,
    // eslint-disable-next-line max-len
    'Password must contain at least 8 characters, one uppercase, one number and one special case character',
  ),
  confirmPassword: yup
    .string()
    .required('This field is required')
    .oneOf([yup.ref('password'), ''], 'Passwords must match'),
});
