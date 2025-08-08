import Image from "next/image";
import { useState } from "react";

type IProps = {
  label: string;
  error?: { message?: string };
  isLoading?: boolean;
  disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function GenericPasswordField({
  label,
  error,
  isLoading,
  disabled,
  ...rest
}: IProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <label className="text-dark-gray block mb-1 text-md font-medium">
        {label}
      </label>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          disabled={isLoading || disabled}
          {...rest}
          className="w-full border border-dark-gray px-3 py-2 pr-10 rounded-lg focus:outline-primary"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
          <Image 
            src={showPassword ? "/icons/eye-slash.svg" : "/icons/eye.svg"} 
            alt="Show password" 
            width={16} 
            height={16} 
            onClick={() => setShowPassword(!showPassword)} 
          />
        </span>
      </div>

      {error && 
        <p className="text-sm text-red-500 mt-1">{error.message}</p>
      }
    </div>
  );
}
