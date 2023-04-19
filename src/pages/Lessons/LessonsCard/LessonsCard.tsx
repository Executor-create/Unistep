import { Link } from "react-router-dom";
import { CardData } from "../LessonsCardData";
import styles from "./LessonsCard.module.css";

type LessonsCardProps = {
  card: CardData;
};

const LessonsCard = ({ card }: LessonsCardProps) => {
  return (
    <Link className={styles.card__link} to={`/lessons/lesson/${card.id}`}>
      <div className={styles.card}>
        <h1 className={styles.card__title}>{card.title}</h1>
        <img style={{ width: "100%", height: "75%" }} src={card.image} alt="" />
        <p>{card.content}</p>
      </div>
    </Link>
  );
};

export default LessonsCard;
