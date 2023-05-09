import Header from "../../components/layout/Header/Header";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import LessonsCardList from "./LessonsCardList/LessonsCardList";
import useSidebarToggle from "../../hooks/useSidebarToggle";
import styles from "./Lessons.module.css";

const Lessons = () => {
  const { isOpen, toggle: setOpen } = useSidebarToggle();

  return (
    <div className={styles.wrapper}>
      <Header openSidebar={setOpen} />
      <Sidebar open={isOpen} toggle={setOpen} />
      <main className={styles.main}>
        <LessonsCardList />
      </main>
    </div>
  );
};

export default Lessons;
