import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

type Item = {
  border: string;
  color: string;
  cursor: string;
  fontSize?: string;
  fontColor?: string;
  height: string;
  radius?: string;
  text: string;
  width: string;
  path: string;
};

const buttons: Item[] = [
  {
    text: "CHOOSE YOUR DIRECTION",
    height: "150px",
    width: "300px",
    border: "none",
    radius: "40px",
    color: "var(--secondary-color)",
    fontSize: "20px",
    fontColor: "#000000",
    cursor: "pointer",
    path: "/",
  },
  {
    text: "ADDITIONAL LESSONS",
    height: "150px",
    width: "300px",
    border: "none",
    radius: "40px",
    color: "var(--secondary-color)",
    fontSize: "20px",
    fontColor: "#000000",
    cursor: "pointer",
    path: "/lessons",
  },
  {
    text: "CONTACT THE ADMINISTRATION",
    height: "150px",
    width: "300px",
    border: "none",
    radius: "40px",
    color: "var(--secondary-color)",
    fontSize: "20px",
    fontColor: "#000000",
    cursor: "pointer",
    path: "/",
  },
];

const HomeButtons = () => {
  return (
    <>
      {buttons.map((button, index) => (
        <Link key={index} to={button.path}>
          <Button {...button} />
        </Link>
      ))}
    </>
  );
};

export default HomeButtons;
