import styles from "./ProfileFormTextarea.module.css";
import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../../../types/types";

type ProfileFormTextareaProps = {
  register: UseFormRegister<FormValues>;
};

const ProfileFormTextarea = ({ register }: ProfileFormTextareaProps) => {
  return (
    <div className={styles["form__textarea-wrapper"]}>
      <label className={styles.form__label}>About</label>
      <textarea
        className={styles.form__textarea}
        {...register("about")}
      ></textarea>
    </div>
  );
};

export default ProfileFormTextarea;
