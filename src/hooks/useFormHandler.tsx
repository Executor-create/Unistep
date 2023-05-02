import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormValues, User } from "../types/types";
import { createUser, loginUser } from "../api/auth";

type useFormHandlerType = () => {
  register: UseFormRegister<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues>;
  onSubmit: SubmitHandler<FormValues>;
  login: SubmitHandler<FormValues>;
  test: SubmitHandler<FormValues>;
  errors: FieldErrors<FormValues>;
};

const useFormHandler: useFormHandlerType = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data: User) => {
    await createUser<User>(data);

    reset();
    navigate("/signin");
  };

  const login: SubmitHandler<FormValues> = async (data: User) => {
    try {
      await loginUser<User>(data);

      reset();
      navigate("/");
    } catch (error: any) {
      setError("email", { type: "email", message: error.message });
      setError("password", { type: "password", message: error.message });
    }
  };

  const test: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
    reset();
  };

  return {
    register,
    onSubmit,
    login,
    handleSubmit,
    test,
    errors,
  };
};

export default useFormHandler;
