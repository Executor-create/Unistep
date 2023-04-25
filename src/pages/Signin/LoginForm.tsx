import { Link } from "react-router-dom";
import SigninFormInputs from "./SigninFormInputs/SigninFormInputs";
import useFormHandler from "../../hooks/useFormHandler";
import styles from "./LoginForm.module.css";
import Button from "../../components/common/Button";

const LoginForm = () => {
  const { register, handleSubmit, onSubmit, errors } = useFormHandler();

  return (
    <form className={styles.form__wrapper}>
      <h1 className={styles.form__title}>Welcome to UniStep</h1>
      <SigninFormInputs register={register} errors={errors} />
      <Button
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
      <p className={styles["form__signup-text"]}>
        Don't have an account?
        <Link className={styles["form__signup-link"]} to="/signup">
          Signup
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
