import styles from "./ProfileFormTextarea.module.css";

const ProfileFormTextarea = () => {
  return (
    <div className={styles["form__textarea-wrapper"]}>
      <label className={styles.form__label}>About</label>
      <textarea className={styles.form__textarea}></textarea>
    </div>
  );
};

export default ProfileFormTextarea;
