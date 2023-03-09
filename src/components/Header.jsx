import styles from "./Header.module.css";

import ImgIgniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ImgIgniteLogo} alt="Logo Ignite Feed" />
    </header>
  );
}
