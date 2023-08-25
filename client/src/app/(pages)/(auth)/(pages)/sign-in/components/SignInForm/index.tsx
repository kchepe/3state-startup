'use client';

import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';
import { MdOutlineEmail } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import Button from '@/app/common/Button';
import InputForm from '@/app/common/FormBuilder/InputForm';
import PasswordInput from '@/app/common/FormBuilder/PasswordInput';
import Alert from '@/app/common/Alert';
import useNotificationManager from '@/app/hooks/useNotificationManager';
import Box from '@/app/common/Box';
import Text from '@/app/common/Text';

const SignInForm: FC = () => {
  const { handleSubmit } = useFormContext();
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { showError, showNotification } = useNotificationManager();

  const handleLogin: SubmitHandler<FieldValues> = async (submitValues) => {
    // TODO: improve error handling
    setIsLoading(true);
    const response = await signIn('credentials', {
      ...submitValues,
      redirect: false,
    });
    if (response?.error) {
      switch (response.error) {
        case 'fetch failed':
          showError();
          break;
        default:
          showNotification('Invalid username or password.', 'error');
      }
    } else {
      push('/my-properties');
    }
    setIsLoading(false);
  };

  return (
    <Box className="flex flex-col gap-4">
      <Box className="flex flex-col items-center mb-5">
        <Text className="font-extrabold text-3xl text-primary">Welcome!</Text>
        <Text className="text-sm text-gray-500">Login your account</Text>
      </Box>
      <Box>
        <Alert timeout={10000} />
      </Box>
      <Box>
        <InputForm
          name="email"
          label="Email Address"
          placeholder="Enter your email"
          startIcon={<MdOutlineEmail className="text-primary text-lg" />}
        />
      </Box>
      <Box>
        <PasswordInput name="password" label="Password" placeholder="Enter your password" />
      </Box>
      <Box className="text-right text-xs">
        <Text className="hover:underline cursor-pointer font-bold">Forgot Password?</Text>
      </Box>
      <Box>
        <Button
          color="primary"
          fullWidth
          size="large"
          onClick={handleSubmit(handleLogin)}
          loading={isLoading}
          disabled={isLoading}
        >
          Login
        </Button>
      </Box>
      <Box className="text-center">
        <Text>
          Don&#39;t have an account?{' '}
          <Link href="/register">
            <Text className="hover:underline font-bold cursor-pointer">Sign up</Text>
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default SignInForm;
