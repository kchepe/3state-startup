'use client';

import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';
import { MdEmail } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { FC, useContext, useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import Button from '@/app/common/Button';
import InputForm from '@/app/common/FormBuilder/InputForm';
import PasswordInput from '@/app/common/FormBuilder/PasswordInput';
import Alert from '@/app/common/Alert';
import { NotificationContext } from '@/app/context/NotificationContext';

const SignInForm: FC = () => {
  const { handleSubmit } = useFormContext();
  const { push } = useRouter();
  const { dispatch } = useContext(NotificationContext);
  const [isLoading, setIsLoading] = useState(false);

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
          dispatch({ type: 'SHOW_SERVER_ERROR' });
          break;
        default:
          dispatch({
            type: 'SHOW_NOTIFICATION',
            payload: { message: 'Invalid username or password.', severity: 'error' },
          });
      }
    } else {
      push('/my-properties');
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center mb-5">
        <span className="font-extrabold text-3xl text-primary">Welcome!</span>
        <span className="text-sm text-gray-500">Login your account</span>
      </div>
      <div>
        <Alert timeout={10000} />
      </div>
      <div>
        <InputForm
          name="email"
          label="Email Address"
          placeholder="Enter your email"
          startIcon={<MdEmail className="text-primary text-lg" />}
        />
      </div>
      <div>
        <PasswordInput name="password" label="Password" placeholder="Enter your password" />
      </div>
      <div className="text-right text-xs">
        <span className="hover:underline cursor-pointer font-bold">Forgot Password?</span>
      </div>
      <div>
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
      </div>
      <div className="text-center">
        <span>
          Don&#39;t have an account?{' '}
          <Link href="/register">
            <span className="hover:underline font-bold cursor-pointer">Sign up</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignInForm;
