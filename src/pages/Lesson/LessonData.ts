import jsImg from "../../assets/img/lessons/js-img.svg";
import designImg from "../../assets/img/lessons/design-img.svg";
import frontImg from "../../assets/img/lessons/front-img.svg";
import cImg from "../../assets/img/lessons/c-img.svg";
import reactImg from "../../assets/img/lessons/react-img.svg";
import pythonImg from "../../assets/img/lessons/python-img.svg";

type LessonData = {
  id: number;
  title: string;
  image: string;
  description: string;
  video: string;
  consultation?: string;
  access: string;
  bonus?: string;
  materials?: string;
  diplom?: string;
  test?: string;
};

export const data: LessonData[] = [
  {
    id: 1,
    title: "JavaScript",
    image: jsImg,
    description:
      "JavaScript is a high-level, dynamic, and interpreted programming language that is primarily used for creating interactive web pages and web applications. It is one of the core technologies of the web alongside HTML and CSS.",
    video: "8 video courses",
    consultation: "Online consultation",
    access: "Access for 6 month",
    bonus: "Bonus program",
    materials: "Educational materials",
    diplom: "Diplom",
    test: "10 tests and a certificate",
  },

  {
    id: 2,
    title: "UI/UX Design",
    image: designImg,
    description:
      "UX/UI stands for user experience and user interface design, and it refers to the process of creating digital interfaces that are both visually appealing and easy to use.",
    video: "8 video courses",
    consultation: "Online consultation",
    access: "Access for 3 month",
    bonus: "Bonus program",
    materials: "Educational materials",
    diplom: "Diplom",
    test: "10 tests and a certificate",
  },
  {
    id: 3,
    title: "Frontend Developer",
    image: frontImg,
    description:
      "The FrontEnd developer creates the user-visible part of the web page, and his main task is to accurately convey in the workshop what the designer created, and also implement the user's part.",
    video: "44 video courses",
    consultation: "Online consultation",
    access: "Access for 7 month",
    bonus: "Bonus program",
    materials: "Educational materials",
    diplom: "Diplom",
    test: "12 tests and a certificate",
  },
  {
    id: 4,
    title: "C++",
    image: cImg,
    description:
      "C++ is a general-purpose programming language with support for several programming paradigms: object-oriented, generalized, procedural, etc.",
    video: "8 video courses",
    consultation: "Online consultation",
    access: "Access for 3 month",
    bonus: "Bonus program",
    materials: "Educational materials",
    diplom: "Diplom",
    test: "10 tests and a certificate",
  },
  {
    id: 5,
    title: "React",
    image: reactImg,
    description:
      "Today, React is the most popular front-end framework, so its demand in the IT market is unquestionable. If you like to combine programming with creativity, and at the same time constantly monitor the results of your work, this specialty is your calling.",
    video: "19 video courses",
    consultation: "Online consultation",
    access: "Access for 6 month",
    bonus: "Bonus program",
    materials: "Educational materials",
    diplom: "Diplom",
    test: "10 tests and a certificate",
  },
  {
    id: 6,
    title: "Python",
    image: pythonImg,
    description:
      "Python is probably the easiest programming language to learn. It is versatile and extremely popular, as it can be used in creating server-side web applications, developing desktop and mobile applications, games, Data Science, software testing...",
    video: "19 video courses",
    consultation: "Online consultation",
    access: "Access for 6 month",
    bonus: "Bonus program",
    materials: "Educational materials",
    diplom: "Diplom",
    test: "10 tests and a certificate",
  },
];
