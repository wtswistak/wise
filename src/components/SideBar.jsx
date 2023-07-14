import { Outlet } from "react-router-dom";
import styles from "./SideBar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright{new Date().getFullYear()}
          by Wt Inc.{" "}
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
