import styles from "./Home.module.css";
import img from "../../assets/img/main-img.svg";
import useSidebarToggle from "../../hooks/useSidebarToggle";
import Header from "../../components/layout/Header/Header";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import HomeButtons from "./HomeButtons";

const Home = () => {
  const { isOpen, toggle: setOpen } = useSidebarToggle();

  return (
    <div className={styles.wrapper}>
      <Header username="Geralt of Rivia" openSidebar={setOpen} />
      <Sidebar open={isOpen} toggle={setOpen} />
      <main className={styles.main}>
        <div className={styles.main__container}>
          <div>
            <img className={styles.main__img} src={img} alt="img" />
          </div>
          <div className={styles["main__buttons-wrapper"]}>
            <HomeButtons />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
