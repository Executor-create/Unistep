import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormValues } from "../types/types";
import { signupUser, signinUser } from "../services/authService";
import { updateUser } from "../api/userApi";

const useFormHandler = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    await signupUser(data);

    reset();
    navigate("/signin");
  };

  const login: SubmitHandler<FormValues> = async (data: any) => {
    try {
      await signinUser(data);

      reset();
      navigate("/");
    } catch (error: any) {
      setError("email", { type: "email", message: error.message });
      setError("password", { type: "password", message: error.message });
    }
  };

  const updateUserHandler: SubmitHandler<FormValues> = async (
    data: FormValues
  ) => {
    const formData = new FormData();
    formData.append("avatar_url", data.avatar_url[0]);

    await updateUser(data);
    console.log("User updated successfully:", data);
  };

  return {
    register,
    onSubmit,
    login,
    handleSubmit,
    updateUserHandler,
    errors,
    setValue,
  };
};

export default useFormHandler;
