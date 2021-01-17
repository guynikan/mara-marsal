import React from "react";
import photo1 from "../Assets/Photos/photo-1.jpg";
import photo2 from "../Assets/Photos/photo-2.jpg";
import photo3 from "../Assets/Photos/photo-3.jpg";
import styles from "../Styles/EnterGallery.module.css";

function EnterGallery() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img src={photo1} />
      </div>
      <div className={styles.box}>
        <img src={photo2} />
      </div>
      <div className={styles.box}>
        <img src={photo3} />
      </div>
    </div>
  );
}

export default EnterGallery;
