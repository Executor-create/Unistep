import styles from "./ProfileForm.module.css";
import useFormHandler from "../../hooks/useFormHandler";
import Avatar from "../../components/common/Avatar";
import Button from "../../components/common/Button";
import ProfileFormInputs from "./ProfileFormInputs/ProfileFormInputs";
import ProfileFormTextarea from "./ProfileFormTextarea/ProfileFormTextarea";
import ProfileFormButton from "./ProfileFormButton/ProfileFormButton";

const ProfileForm = () => {
  const { register, handleSubmit, onSubmit, errors } = useFormHandler();

  return (
    <form className={styles.form}>
      <div className={styles.form__wrapper}>
        <div className={styles.avatar__wrapper}>
          <Avatar
            imageUrl="https://assets.reedpopcdn.com/geralt_witcher.jpg/BROK/thumbnail/1200x1200/quality/100/geralt_witcher.jpg"
            altText="img"
            size="150px"
          />
          <Button
            type="submit"
            border="none"
            radius="20px"
            color="var(--quaternary-color)"
            height="30px"
            margin="20px"
            width="150px"
            cursor="pointer"
            fontSize="18px"
            fontColor="#ffffff"
            text="Change photo"
          ></Button>
        </div>
        <ProfileFormInputs register={register} errors={errors} />
      </div>
      <ProfileFormTextarea />
      <ProfileFormButton onSubmit={handleSubmit(onSubmit)} />
    </form>
  );
};

export default ProfileForm;
