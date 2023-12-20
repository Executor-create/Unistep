import styles from "./ProfileForm.module.css";
import useFormHandler from "../../hooks/useFormHandler";
import useUploadFile from "../../hooks/useUploadFile";
import Avatar from "../../components/common/Avatar";
import ProfileFormInputs from "./ProfileFormInputs/ProfileFormInputs";
import ProfileFormTextarea from "./ProfileFormTextarea/ProfileFormTextarea";
import ProfileFormButton from "./ProfileFormButton/ProfileFormButton";

const ProfileForm = () => {
  const { register, handleSubmit, updateUserHandler, errors, setValue } =
    useFormHandler();

  const { handleFileChange } = useUploadFile({
    setValue,
    inputName: "avatar_url",
  });

  return (
    <form onSubmit={handleSubmit(updateUserHandler)} className={styles.form}>
      <div className={styles.form__wrapper}>
        <div className={styles.avatar__wrapper}>
          <Avatar altText="img" size="150px" />
          <label className={styles.lab} htmlFor="file-upload">
            Choose a file
            <input
              className={styles.lab__input}
              type="file"
              id="file-upload"
              accept="image/*"
              {...register("avatar_url")}
              onChange={handleFileChange}
            />
          </label>
        </div>
        <ProfileFormInputs register={register} errors={errors} />
      </div>
      <ProfileFormTextarea register={register} />
      <ProfileFormButton />
    </form>
  );
};

export default ProfileForm;
