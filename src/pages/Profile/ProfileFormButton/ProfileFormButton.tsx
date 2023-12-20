import Button from "../../../components/common/Button";
import styles from "./ProfileFormButton.module.css";

type ProfileFormButtonProps = {
  onSubmit: () => void;
};

const ProfileFormButton = () => {
  return (
    <div className={styles["form__button-wrapper"]}>
      <Button
        type="submit"
        border="none"
        radius="10px"
        color="var(--quaternary-color)"
        height="50px"
        width="180px"
        cursor="pointer"
        fontSize="18px"
        fontColor="#ffffff"
        text="SAVE"
      ></Button>
    </div>
  );
};

export default ProfileFormButton;
