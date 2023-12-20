import styles from "./Signin.module.css";
import LoginForm from "./LoginForm";
import decor from "../../assets/img/signup-decor.svg";
import img from "../../assets/img/signup-img.svg";

const Signin = () => {
  return (
    <main className={styles.signin}>
      <div className={styles.signin__container}>
        <span>
          <img className={styles.signin__img} src={img} alt="img" />
        </span>
        <LoginForm />
      </div>
      <img className={styles["signin__img-decor"]} src={decor} alt="decor" />
    </main>
  );
};

export default Signin;
