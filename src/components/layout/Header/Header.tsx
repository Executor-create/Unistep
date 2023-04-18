import React from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import Avatar from "../../common/Avatar";
import "./Header.css";

type HeaderProps = {
  username: string;
  openSidebar: () => void;
};

const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-wrapper">
          <div className="header__icon-wrapper">
            <HiMenu onClick={props.openSidebar} />
          </div>
          <Link className="header__logo-link" to="/">
            <h1 className="header__logo">UniStep</h1>
          </Link>
        </div>
        <div className="header__user-profile">
          <h2 className="header__user-username">{props.username}</h2>
          <Avatar
            imageUrl="https://assets.reedpopcdn.com/geralt_witcher.jpg/BROK/thumbnail/1200x1200/quality/100/geralt_witcher.jpg"
            altText="img"
            size="50px"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
