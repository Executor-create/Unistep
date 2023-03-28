import React from "react";
import logo from "../../assets/img/logo.svg";
import "./Header.css";

type HeaderProps = {
  username: string;
  avatar: string;
};

const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__container">
        <a className="header__logo-link" href="#">
          <h1 className="header__logo">UniStep</h1>
        </a>
        <div className="header__user-profile">
          <h2 className="header__user-username">{props.username}</h2>
          <img
            className="header__user-avatar"
            src={props.avatar}
            alt="User avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
