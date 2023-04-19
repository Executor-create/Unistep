import styles from "./LessonDetails.module.css";
import video from "../../../assets/img/icons/video.svg";
import bonus from "../../../assets/img/icons/bonus.svg";
import camera from "../../../assets/img/icons/camera.svg";
import clock from "../../../assets/img/icons/clock.svg";
import book from "../../../assets/img/icons/book.svg";
import diplom from "../../../assets/img/icons/diplom.svg";
import test from "../../../assets/img/icons/test.svg";
import Button from "../../../components/common/Button";

const LessonDetails = ({ lessonData }: any) => {
  return (
    <div className={styles["lesson__content-wrapper"]}>
      <div className={styles["lesson__description-wrapper"]}>
        <p className={styles.lesson__description}>{lessonData.description}</p>
      </div>
      <div className={styles["lesson__details-wrapper"]}>
        <div>
          <img src={video} alt="video" />
          <p>{lessonData.video}</p>
        </div>
        <div>
          <img src={camera} alt="camera" />
          <p>{lessonData.consultation}</p>
        </div>
        <div>
          <img src={clock} alt="clock" />
          <p>{lessonData.access}</p>
        </div>
        <div>
          <img src={bonus} alt="bonus" />
          <p>{lessonData.bonus}</p>
        </div>
        <div>
          <img src={book} alt="book" />
          <p>{lessonData.materials}</p>
        </div>
        <div>
          <img src={diplom} alt="" />
          <p>{lessonData.diplom}</p>
        </div>
        <div>
          <img src={test} alt="" />
          <p>{lessonData.test}</p>
        </div>
      </div>
      <div className={styles["lesson__button-wrapper"]}>
        <Button
          border="none"
          radius="40px"
          color="var(--quaternary-color)"
          height="50px"
          width="200px"
          cursor="pointer"
          fontSize="18px"
          fontColor="#ffffff"
          text="Start the course"
        ></Button>
      </div>
    </div>
  );
};

export default LessonDetails;
