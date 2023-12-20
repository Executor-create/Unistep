import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../../context/UserContext";
import { useContext } from "react";
import Avatar from "../../common/Avatar";
import "./Header.css";

type HeaderProps = {
  openSidebar: () => void;
};

const Header = (props: HeaderProps) => {
  const currentUser = useContext(CurrentUserContext);

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
          <h2 className="header__user-username">{currentUser?.username}</h2>
          <Link style={{ height: "50px", borderRadius: "100%" }} to="/profile">
            {currentUser?.avatar_url ? (
              <Avatar altText="img" size="50px" />
            ) : (
              ""
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
