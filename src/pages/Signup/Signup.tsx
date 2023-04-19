import React from "react";
import styles from "./Signup.module.css";
import LoginForm from "./LoginForm";
import decor from "../../assets/img/signup-decor.svg";
import img from "../../assets/img/signup-img.svg";

const Signup = () => {
  return (
    <main className={styles.signup}>
      <div className={styles.signup__container}>
        <span>
          <img className={styles.signup__img} src={img} alt="img" />
        </span>
        <LoginForm />
      </div>
      <img className={styles["signup__img-decor"]} src={decor} alt="decor" />
    </main>
  );
};

export default Signup;
