import styles from "./SignupForm.module.css";
import SignupFormInputs from "./SignupFormInputs/SignupFormInputs";
import Button from "../../components/common/Button";
import useFormHandler from "../../hooks/useFormHandler";

const SignupForm = () => {
  const { register, handleSubmit, onSubmit, errors } = useFormHandler();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form__wrapper}>
      <h1 className={styles.form__title}>Sign up</h1>
      <SignupFormInputs register={register} errors={errors} />
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
        text="Sign up"
      ></Button>
    </form>
  );
};

export default SignupForm;
