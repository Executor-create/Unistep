import jsImg from "../../assets/img/lessons/js-img.svg";
import designImg from "../../assets/img/lessons/design-img.svg";
import frontImg from "../../assets/img/lessons/front-img.svg";
import cImg from "../../assets/img/lessons/c-img.svg";
import reactImg from "../../assets/img/lessons/react-img.svg";
import pythonImg from "../../assets/img/lessons/python-img.svg";

export type CardData = {
  id: number;
  title: string;
  image: string;
  content: string;
};

export const cards: CardData[] = [
  {
    id: 1,
    title: "JavaScript",
    image: jsImg,
    content: "10 courses / 3 months",
  },
  {
    id: 2,
    title: "UI/UX Design",
    image: designImg,
    content: "7 courses / 1 month",
  },
  {
    id: 3,
    title: "Front-end",
    image: frontImg,
    content: "44 courses / 7 months",
  },
  {
    id: 4,
    title: "C++",
    image: cImg,
    content: "8 courses / 3 months",
  },
  {
    id: 5,
    title: "React",
    image: reactImg,
    content: "16 courses / 4 months",
  },
  {
    id: 6,
    title: "Python",
    image: pythonImg,
    content: "19 courses / 6 months",
  },
];
