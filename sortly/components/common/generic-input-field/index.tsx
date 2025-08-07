"use client";
import { FieldError } from 'react-hook-form';

interface IProps {
  label: string;
  isLoading?: boolean;
  disabled?: boolean;
  error?: FieldError
  type?: string;
}

export default function GenericInputField({ 
  label, 
  isLoading=false, 
  disabled=false, 
  error, 
  type="text", 
  ...rest 
} :  IProps) {

  return (
    <div>
      <label className="text-dark-gray block mb-1 text-md font-medium">{label}</label>
      <input
        type={type}
        disabled={isLoading || disabled}
        {...rest}
        className="w-full border border-dark-gray px-3 py-2 rounded-lg focus:outline-primary"
      />
      {error && <p className="text-sm text-red-500 mt-1">{error?.message}</p>}
    </div>
  )
}