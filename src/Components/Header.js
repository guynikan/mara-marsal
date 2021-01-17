import React from "react";
import instagramLogo from "../Assets/Svg/instagram.svg";
import styles from "../Styles/Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Mara Marsal</h1>
      <h2 className={styles.title}>1971</h2>
      <nav className={styles.menu}>
        <ul>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <a href="#">
              <img src={instagramLogo} alt="instagram" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
