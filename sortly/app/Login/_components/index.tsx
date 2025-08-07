"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import GenericInputField from '../../../components/common/generic-input-field';
import GenericPasswordField from '../../../components/common/generic-password-field';
import GenericSubmitButton from '../../../components/common/generic-submit-button';
import { LoginFormData, loginSchema } from './validation';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log('Login submitted:', data);
    await new Promise((r) => setTimeout(r, 1000));
  };

  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen bg-accent px-6 py-20">
      <div className='max-w-sm mx-auto px-6 py-8 rounded-lg shadow-lg bg-white h-auto w-full'>
        <div className='text-4xl font-bold mb-8 text-primary text-center w-full'>LOGIN</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <GenericInputField
            isLoading={isSubmitting}
            disabled={isSubmitting}
            label="Email"
            type='email'
            error={errors?.email}
            {...register('email')}
          />
          <GenericPasswordField
            isLoading={isSubmitting}
            disabled={isSubmitting}
            label="Password"
            error={errors?.password}
            {...register('password')}
          />

          <div className='flex justify-end items-center text-dark-gray text-md font-normal pb-2'>
            <Link href="/register" className='underline font-normal text-primary text-md'>
              Forgot Password
            </Link>
          </div>

          <GenericSubmitButton 
            isLoading={isSubmitting} 
            label="LOGIN" 
          />

          <div className='text-center font-normal text-md text-dark-gray mt-4'>
            Don&apos;t have an account?
            <Link href="/register" className='pl-2 underline font-normal text-primary text-md'>
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}