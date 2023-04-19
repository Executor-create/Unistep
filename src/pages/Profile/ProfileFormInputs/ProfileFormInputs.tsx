import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormValues } from "../../../types/types";
import Input from "../../../components/common/Input";
import styles from "./ProfileFormInputs.module.css";

type ProfileFormInputsProps = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

const ProfileFormInputs = ({ register, errors }: ProfileFormInputsProps) => {
  return (
    <div>
      <div className={styles.form__group}>
        <Input
          className={styles.form__input}
          labelClassName={styles.form__label}
          type="text"
          placeholder="Name"
          label="name"
          register={register}
          rules={{
            required: {
              value: true,
              message: "Name is required",
            },
            pattern: {
              value: /^[a-zA-Z]{2,8}$/,
              message: "Please enter a valid name.",
            },
          }}
          error={errors.name}
        />
      </div>
      <div className={styles.form__group}>
        <Input
          className={styles.form__input}
          labelClassName={styles.form__label}
          type="text"
          placeholder="Number"
          label="number"
          register={register}
          rules={{
            required: {
              value: true,
              message: "Number is required",
            },
            pattern: {
              value: /^\+?\d{1,3}\s?\d{3,4}\s?\d{4}$/,
              message: "Please enter a valid number.",
            },
          }}
          error={errors.number}
        />
      </div>
      <div className={styles.form__group}>
        <Input
          className={styles.form__input}
          labelClassName={styles.form__label}
          type="text"
          placeholder="Birthday"
          label="birthday"
          register={register}
          rules={{
            required: {
              value: true,
              message: "Birthday is required",
            },
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
