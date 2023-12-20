import styles from "./ProfileFormTextarea.module.css";
import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../../../types/types";
import { CurrentUserContext } from "../../../context/UserContext";
import { useContext } from "react";

type ProfileFormTextareaProps = {
  register: UseFormRegister<FormValues>;
};

const ProfileFormTextarea = ({ register }: ProfileFormTextareaProps) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className={styles["form__textarea-wrapper"]}>
      <label className={styles.form__label}>About</label>
      <textarea
        className={styles.form__textarea}
        defaultValue={currentUser?.bio}
        {...register("bio")}
      ></textarea>
    </div>
  );
};

export default ProfileFormTextarea;
