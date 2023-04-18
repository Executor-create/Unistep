import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

const NotFound = () => {
  return (
    <div>
      <div className={styles.wrapper__container}>
        <div className={styles["wrapper__title-wrapper"]}>
          <h1 className={styles.wrapper__title}>404</h1>
          <p className={styles.wrapper__subtitle}>Whoops, that page is gone</p>
          <Link to="/">
            <Button
              type="submit"
              border="none"
              radius="10px"
              color="#9370db"
              height="60px"
              width="180px"
              cursor="pointer"
              fontSize="18px"
              fontColor="#ffffff"
              text="Go to homepage"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
