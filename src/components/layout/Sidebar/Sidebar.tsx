import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { logout } from "../../../services/authService";
import SidebarData from "./SidebarData";
import styles from "./Sidebar.module.css";

type SidebarProps = {
  open: boolean;
  toggle: () => void;
};

const Sidebar = ({ open, toggle }: SidebarProps) => {
  const items = SidebarData();

  return (
    <aside
      className={`${styles.sidebar} ${open ? "" : styles.sidebar__hidden}`}
    >
      <div className={styles["sidebar__icon-wrapper"]}>
        <HiX className={styles.sidebar__icon} onClick={toggle} />
      </div>
      <div>
        {items.map(({ path, name }, index) => (
          <ul className={styles.sidebar__list} key={index}>
            <Link
              className={styles.sidebar__link}
              to={path}
              onClick={path === "/signin" ? logout : undefined}
            >
              <li className={styles.sidebar__item}>{name}</li>
            </Link>
          </ul>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
