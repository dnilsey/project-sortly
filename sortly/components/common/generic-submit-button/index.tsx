"use client";

interface IProps {
  isLoading: boolean;
  label: string;
}

export default function GenericSubmitButton({ isLoading, label }: IProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="w-full bg-primary text-white font-bold mt-4 cursor-pointer transition-all text-lg py-2 rounded-full active:scale-95 disabled:opacity-80"
    >
      {isLoading ? 'LOADING...' : label}
    </button>
  )
}