type IProps = {
  label: string;
  error?: { message?: string };
  isLoading?: boolean;
  disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function GenericRadioButton({
  label,
  error,
  isLoading,
  disabled,
  ...rest
}: IProps) {
  const inputId = rest.id || rest.value?.toString() || label;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <input
          id={inputId}
          type="radio"
          disabled={isLoading || disabled}
          {...rest}
          className="h-4 w-4 text-primary border-gray-300 focus:ring-primary disabled:opacity-50"
        />
        <label htmlFor={inputId} className="text-dark-gray text-md font-medium">
          {label}
        </label>
      </div>

      {error?.message && (
        <p className="text-sm text-red-500">{error.message}</p>
      )}
    </div>
  );
}
