import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '@/app/common/Button';
import InputForm from '@/app/common/FormBuilder/InputForm';
import PasswordInput from '@/app/common/FormBuilder/PasswordInput';
import SelectForm from '@/app/common/FormBuilder/SelectForm';
import { ADD_USER } from '@/app/gql/mutations/user';
import Alert from '@/app/common/Notifications/Alert';
import InputPhone from '@/app/common/FormBuilder/InputPhone';
import useNotificationManager from '@/app/hooks/useNotificationManager';
import Box from '@/app/common/Box';
import Text from '@/app/common/Text';
import Person from '@/app/icons/Person';
import Mail from '@/app/icons/Mail';
import Phone from '@/app/icons/Phone';
import useMutationAuthClient from '@/app/hooks/Apollo/useMutationAuthClient';
import { userType } from './registerFormValues';

const RegisterForm = () => {
  const { handleSubmit } = useFormContext();
  const { push } = useRouter();
  const { showError, showNotification } = useNotificationManager();
  const [loginLoading, setLoginLoading] = useState(false);

  const { mutation: createUser, loading } = useMutationAuthClient(ADD_USER, {
    onError: () => {
      showError();
    },
  });

  const handleSign = async (signinValue: { email: string; password: string }) => {
    setLoginLoading(true);
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
        showNotification(data.signup.message, 'error');
      }
    }
  };

  return (
    <Box className="grid grid-cols-12 gap-4">
      <Box className="flex flex-col items-center mb-5 col-span-full">
        <Text className="font-extrabold text-3xl text-primary">Create your account</Text>
        <Text className="text-sm text-gray-500">Enter the fields below to get started</Text>
      </Box>
      <Box className="col-span-full">
        <Alert timeout={10000} />
      </Box>
      <Box className="col-span-full md:col-span-6">
        <InputForm
          name="firstName"
          label="Firstname"
          placeholder="Enter your firstname"
          startIcon={<Person className="text-primary" />}
        />
      </Box>
      <Box className="col-span-full md:col-span-6">
        <InputForm
          name="lastName"
          label="Lastname"
          placeholder="Enter your lastname"
          startIcon={<Person className="text-primary" />}
        />
      </Box>
      <Box className="col-span-full">
        <SelectForm name="userType" options={userType} label="User Type" />
      </Box>
      <Box className="col-span-full md:col-span-6">
        <InputForm
          name="email"
          label="Email Address"
          placeholder="Enter your email"
          startIcon={<Mail className="text-primary" />}
        />
      </Box>
      <Box className="col-span-full md:col-span-6">
        <InputPhone
          name="phoneNumber"
          label="Phone Number"
          placeholder="Enter your Phone number"
          startIcon={<Phone className="text-primary" />}
        />
      </Box>
      <Box className="col-span-full md:col-span-6">
        <PasswordInput name="password" label="Password" placeholder="Enter your password" />
      </Box>
      <Box className="col-span-full md:col-span-6">
        <PasswordInput
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
        />
      </Box>
      <Box className="col-span-full">
        <Button
          color="primary"
          fullWidth
          size="large"
          onClick={handleSubmit(handleSignup)}
          loading={loading || loginLoading}
        >
          Signup
        </Button>
      </Box>
      <Box className="col-span-full text-center">
        <Text>
          Already have an account?{' '}
          <Link href="/sign-in">
            <Text className="hover:underline font-bold cursor-pointer">Login</Text>
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default RegisterForm;
