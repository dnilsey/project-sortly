"use client";

import { useForm } from "react-hook-form";
import { SignupFormData, signupSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import GenericInputField from "@/components/common/generic-input-field";
import GenericRadioButton from "@/components/common/generic-radio-button";
import GenericSubmitButton from "@/components/common/generic-submit-button";
import Link from "next/link";
import GenericPasswordField from "@/components/common/generic-password-field";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    console.log('Signup submitted:', data);
    await new Promise((r) => setTimeout(r, 1000));
  };

  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen bg-accent px-6 py-10">
      <div className='max-w-sm mx-auto px-6 py-8 rounded-lg shadow-lg bg-white h-auto w-full'>
        <div className='text-4xl font-bold mb-8 text-primary text-center w-full'>SIGNUP</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <GenericInputField
            isLoading={isSubmitting}
            disabled={isSubmitting}
            label="First Name"
            error={errors?.first_name}
            {...register('first_name')}
          />
          <GenericInputField
            isLoading={isSubmitting}
            disabled={isSubmitting}
            label="Last Name"
            error={errors?.last_name}
            {...register('last_name')}
          />

          <div className="pt-2 flex inline-flex items-center space-x-2">
            <GenericRadioButton
              value="female"
              label="Female"
              isLoading={isSubmitting}
              disabled={isSubmitting}
              {...register('gender')}
              error={errors.gender}
            />

            <GenericRadioButton
              value="male"
              label="Male"
              isLoading={isSubmitting}
              disabled={isSubmitting}
              {...register('gender')}
            />

            <GenericRadioButton
              value="other"
              label="Other"
              isLoading={isSubmitting}
              disabled={isSubmitting}
              {...register('gender')}
            />
          </div>
          
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
          <GenericPasswordField
            isLoading={isSubmitting}
            disabled={isSubmitting}
            label="Confirm Password"
            error={errors?.confirm_password}
            {...register('confirm_password')}
          />

          <div className="mt-6" />
          <GenericSubmitButton 
            isLoading={isSubmitting} 
            label="SIGNUP" 
          />

          <div className='text-center font-normal text-md text-dark-gray mt-4'>
            Already have an account?
            <Link href="/login" className='pl-2 underline font-normal text-primary text-md'>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
  