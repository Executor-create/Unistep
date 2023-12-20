import useSidebarToggle from "../../hooks/useSidebarToggle";
import Header from "../../components/layout/Header/Header";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import ProfileForm from "./ProfileForm";
import decor from "../../assets/img/profile-decor.svg";
import styles from "./Profile.module.css";
import img from "../../assets/img/profile-img.svg";

const Profile = () => {
  const { isOpen, toggle: setOpen } = useSidebarToggle();

  return (
    <div className={styles.wrapper}>
      <Header openSidebar={setOpen} />
      <Sidebar open={isOpen} toggle={setOpen} />
      <main className={styles.profile}>
        <div className={styles.profile__container}>
          <ProfileForm />
          <div className={styles["profile__img-wrapper"]}>
            <img className={styles.profile__img} src={img} alt="img" />
          </div>
        </div>
        <img className={styles["profile__decor-img"]} src={decor} alt="decor" />
      </main>
    </div>
  );
};

export default Profile;
