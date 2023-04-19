import { data } from "./LessonData";
import { useParams } from "react-router-dom";
import Header from "../../components/layout/Header/Header";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import useSidebarToggle from "../../hooks/useSidebarToggle";
import LessonDetails from "./LessonDetails/LessonDetails";
import styles from "./Lesson.module.css";

const Lesson = () => {
  const { isOpen, toggle: setOpen } = useSidebarToggle();
  const { id } = useParams<{ id: string }>();

  const lessonData = data.find((d) => d.id.toString() === id);

  return (
    <div className={styles.wrapper}>
      <Header username="Geralt of Rivia" openSidebar={setOpen} />
      <Sidebar open={isOpen} toggle={setOpen} />
      {lessonData && (
        <main className={styles.lesson}>
          <div className={styles.lesson__container}>
            <div className={styles["lesson__img-wrapper"]}>
              <h1 className={styles.lesson__title}>{lessonData.title}</h1>
              <img
                className={styles.lesson__img}
                src={lessonData.image}
                alt="img"
              />
            </div>
            <LessonDetails lessonData={lessonData} />
          </div>
        </main>
      )}
    </div>
  );
};

export default Lesson;
