import React, { useState } from "react";
import styles from "./SideMenu.module.css";

const SideMenu = () => {
  const [select, setSelect] = useState(null);
  const [animation, setAnimation] = useState("");

  const toggleMenu = (menu) => {
    if (select === menu) {
      setAnimation("collapse");
      setTimeout(() => {
        setSelect(null);
        setAnimation("");
      }, 800);
    } else {
      setSelect(menu);
      setAnimation("expand");
    }
  };


  return (
    <>
      <div className={`${styles.navBox} ${select === "patient" ? styles[animation] : ""}`}>
        <div className={`${styles.navTitle} ${styles.navTitle1}`} onClick={() => toggleMenu("patient")}>
          <span>환자</span>
        </div>
        {select === "patient" && <div className={styles.navContent}>환자 정보</div>}
      </div>

      <div className={`${styles.navBox} ${select === "clinic" ? styles[animation] : ""}`}>
        <div className={`${styles.navTitle} ${styles.navTitle2}`} onClick={() => toggleMenu("clinic")}>
          <span>냉장고</span>
        </div>
        {select === "clinic" && <div className={styles.navContent}>냉장고 정보</div>}
      </div>

      <div className={`${styles.navBox} ${select === "room" ? styles[animation] : ""}`}>
        <div className={`${styles.navTitle} ${styles.navTitle3}`} onClick={() => toggleMenu("room")}>
          <span>방</span>
        </div>
        {select === "room" && <div className={styles.navContent}>방 정보</div>}
      </div>
    </>
  );
};

export default SideMenu;
