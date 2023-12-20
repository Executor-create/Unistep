import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormValues } from "../../../types/types";
import Input from "../../../components/common/Input";
import styles from "./SignupFormInputs.module.css";

type SignupFormInputsProps = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

const SignupFormInputs = ({ register, errors }: SignupFormInputsProps) => {
  return (
    <div>
      <div className={styles.form__group}>
        <Input
          className={styles.form__input}
          labelClassName={styles.form__label}
          type="text"
          placeholder="Username"
          label="username"
          register={register}
          rules={{
            required: {
              value: true,
              message: "Username is require",
            },
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: "Please enter a valid username.",
            },
          }}
          error={errors.username}
        ></Input>
      </div>
      <div className={styles.form__group}>
        <Input
          className={styles.form__input}
          labelClassName={styles.form__label}
          type="email"
          placeholder="Email"
          label="email"
          register={register}
          rules={{
            required: {
              value: true,
              message: "Email is require",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Please enter a valid email address.",
            },
          }}
          error={errors.email}
        ></Input>
      </div>
      <div className={styles.form__group}>
        <Input
          className={styles.form__input}
          labelClassName={styles.form__label}
          type="password"
          placeholder="Password"
          label="password"
          register={register}
          rules={{
            required: {
              value: true,
              message: "Password is require",
            },
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message:
                "Must contain uppercase and lowercase letters and numbers, and at least one special character.",
            },
          }}
          error={errors.password}
        ></Input>
      </div>
    </div>
  );
};

export default SignupFormInputs;
