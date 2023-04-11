import { Path, UseFormRegister, FieldError } from "react-hook-form";
import { FormValues } from "../../types/form";

type InputProps = {
  label: Path<FormValues>;
  register: UseFormRegister<FormValues>;
  className?: string;
  labelClassName?: string;
  placeholder: string;
  type?: "text" | "email" | "password";
  rules?: Record<string, any>;
  error?: FieldError;
};

const Input = ({
  label,
  register,
  className,
  labelClassName,
  placeholder,
  type,
  rules,
  error,
}: InputProps) => {
  return (
    <>
      <label className={labelClassName}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </label>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        {...register(label, { ...rules })}
      />
      {error && <p className={labelClassName}>{error.message}</p>}
    </>
  );
};

export default Input;
