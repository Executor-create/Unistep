import React from "react";
import useFormHandler from "../../hooks/useFormHandler";
import styles from "./LoginForm.module.css";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

const LoginForm = () => {
  const { register, handleSubmit, onSubmit, errors } = useFormHandler();

  return (
    <form className={styles.form__wrapper}>
      <h1 className={styles.form__title}>Welcome to UniStep</h1>
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
      <Button
        onClick={handleSubmit(onSubmit)}
        type="submit"
        border="none"
        radius="10px"
        color="#4460A3"
        height="50px"
        width="150px"
        cursor="pointer"
        fontSize="18px"
        fontColor="#ffffff"
        text="Sign in"
      ></Button>
    </form>
  );
};

export default LoginForm;
