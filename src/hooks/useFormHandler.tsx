import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";
import { FormValues } from "../types/types";

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

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
    reset();
  };

  return {
    register,
    onSubmit,
    handleSubmit,
    errors,
  };
};

export default useFormHandler;
