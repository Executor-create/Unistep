import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";
import { FormValues } from "../types/types";
import { createUser } from "../api/auth";

type useFormHandlerType = () => {
  register: UseFormRegister<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues>;
  onSubmit: SubmitHandler<FormValues>;
  errors: FieldErrors<FormValues>;
};

const useFormHandler: useFormHandlerType = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    await Promise.all([createUser<FormValues>(data), reset()]);
  };

  return {
    register,
    onSubmit,
    handleSubmit,
    errors,
  };
};

export default useFormHandler;
