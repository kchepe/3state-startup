import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';
import { useMutation } from '@apollo/client';
import Link from 'next/link';
import { useContext } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { BiPhone } from 'react-icons/bi';
import Button from '@/app/common/Button';
import InputForm from '@/app/common/FormBuilder/InputForm';
import PasswordInput from '@/app/common/FormBuilder/PasswordInput';
import SelectForm from '@/app/common/FormBuilder/SelectForm';
import { ADD_USER } from '@/app/gql/mutations/user';
import Alert from '@/app/common/Alert';
import { NotificationContext } from '@/app/context/NotificationContext';
import InputPhone from '@/app/common/FormBuilder/InputPhone';
import { userType } from './registerFormValues';

const RegisterForm = () => {
  const { handleSubmit } = useFormContext();
  const { push } = useRouter();
  const { dispatch } = useContext(NotificationContext);
  const [createUser, { loading }] = useMutation(ADD_USER, {
    onError: () => {
      dispatch({
        type: 'SHOW_SERVER_ERROR',
      });
    },
  });

  const handleSign = async (signinValue: { email: string; password: string }) => {
    const response = await signIn('credentials', {
      ...signinValue,
      redirect: false,
    });
    if (response?.error) {
      push('/sign-in');
    } else {
      push('/my-properties');
    }
  };

  const handleSignup: SubmitHandler<FieldValues> = async (submitValues) => {
    const newSubmitValues = { ...submitValues };
    delete newSubmitValues.confirmPassword;
    newSubmitValues.userType = submitValues.userType.value;
    const { data } = await createUser({ variables: { newUser: newSubmitValues } });

    if (data?.signup) {
      if (data.signup.success) {
        handleSign({ email: data.signup.data.email, password: submitValues.password });
      } else {
        dispatch({
          type: 'SHOW_NOTIFICATION',
          payload: { message: data.signup.message, severity: 'error' },
        });
      }
    }
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="flex flex-col items-center mb-5 col-span-full">
        <span className="font-extrabold text-3xl text-primary">Create your account</span>
        <span className="text-sm text-gray-500">Enter the fields below to get started</span>
      </div>
      <div className="col-span-full">
        <Alert timeout={10000} />
      </div>
      <div className="col-span-full md:col-span-6">
        <InputForm
          name="firstName"
          label="Firstname"
          placeholder="Enter your firstname"
          startIcon={<BsPerson className="text-primary text-lg" />}
        />
      </div>
      <div className="col-span-full md:col-span-6">
        <InputForm
          name="lastName"
          label="Lastname"
          placeholder="Enter your lastname"
          startIcon={<BsPerson className="text-primary text-lg" />}
        />
      </div>
      <div className="col-span-full">
        <SelectForm name="userType" options={userType} label="User Type" />
      </div>
      <div className="col-span-full md:col-span-6">
        <InputForm
          name="email"
          label="Email Address"
          placeholder="Enter your email"
          startIcon={<MdOutlineMail className="text-primary text-lg" />}
        />
      </div>
      <div className="col-span-full md:col-span-6">
        <InputPhone
          name="phoneNumber"
          label="Phone Number"
          placeholder="Enter your Phone number"
          startIcon={<BiPhone className="text-primary text-lg" />}
        />
      </div>
      <div className="col-span-full md:col-span-6">
        <PasswordInput name="password" label="Password" placeholder="Enter your password" />
      </div>
      <div className="col-span-full md:col-span-6">
        <PasswordInput
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
        />
      </div>
      <div className="col-span-full">
        <Button
          color="primary"
          fullWidth
          size="large"
          onClick={handleSubmit(handleSignup)}
          loading={loading}
          disabled={loading}
        >
          Signup
        </Button>
      </div>
      <div className="col-span-full text-center">
        <span>
          Already have an account?{' '}
          <Link href="/sign-in">
            <span className="hover:underline font-bold cursor-pointer">Login</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;
