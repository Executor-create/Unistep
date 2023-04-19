import LessonsCard from "../LessonsCard/LessonsCard";
import { cards } from "../LessonsCardData";
import styles from "./LessonsCardList.module.css";

const LessonsCardList = () => {
  return (
    <div className={styles.list}>
      {cards.map((card) => (
        <LessonsCard
          key={card.id}
          card={card}
        />
      ))}
    </div>
  );
};

export default LessonsCardList;
