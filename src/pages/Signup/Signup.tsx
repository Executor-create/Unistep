import styles from "./Signup.module.css";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <main className={styles.singup}>
      <div className={styles.signup__container}>
        <SignupForm />
      </div>
    </main>
  );
};

export default Signup;
