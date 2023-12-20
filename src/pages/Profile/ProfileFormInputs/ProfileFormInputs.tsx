import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormValues } from "../../../types/types";
import { CurrentUserContext } from "../../../context/UserContext";
import { useContext } from "react";
import Input from "../../../components/common/Input";
import styles from "./ProfileFormInputs.module.css";

type ProfileFormInputsProps = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

const ProfileFormInputs = ({ register, errors }: ProfileFormInputsProps) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div>
      <div className={styles.form__group}>
        <Input
          className={styles.form__input}
          labelClassName={styles.form__label}
          type="text"
          placeholder="Name"
          label="username"
          defaultValue={currentUser?.username}
          register={register}
          rules={{
            pattern: {
              value: /^[a-zA-Z]{2,8}$/,
              message: "Please enter a valid name.",
            },
          }}
          error={errors.username}
        />
      </div>
      <div className={styles.form__group}>
        <Input
          className={styles.form__input}
          labelClassName={styles.form__label}
          type="text"
          placeholder="Phone"
          label="phone"
          register={register}
          defaultValue={currentUser?.phone}
          rules={{
            pattern: {
              value: /^\+?\d{1,3}\s?\d{3,4}\s?\d{4}$/,
              message: "Please enter a valid number.",
            },
          }}
          error={errors.phone}
        />
      </div>
      <div className={styles.form__group}>
        <Input
          className={styles.form__input}
          labelClassName={styles.form__label}
          type="text"
          placeholder="Birthday"
          label="birthday"
          defaultValue={currentUser?.birthday}
          register={register}
          rules={{
            pattern: {
              value: /^\d{4}-\d{2}-\d{2}$/,
              message: "Please enter a valid birthday.",
            },
          }}
          error={errors.birthday}
        />
      </div>
    </div>
  );
};

export default ProfileFormInputs;
