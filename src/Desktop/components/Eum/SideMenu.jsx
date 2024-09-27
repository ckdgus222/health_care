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
          <span>환경설정</span>
        </div>
        {select === "patient" && <div className={styles.navContent}>
            <div>EUM:care & 침상맵핑</div>
            <div>위치 & RFID맵핑</div>
            <div>회복그래프설정</div>
            <div>침상배치설정</div>
          </div>}
      </div>

      <div className={`${styles.navBox} ${select === "clinic" ? styles[animation] : ""}`}>
        <div className={`${styles.navTitle} ${styles.navTitle2}`} onClick={() => toggleMenu("clinic")}>
          <span>정보관리</span>
        </div>
        {select === "clinic" && <div className={styles.navContent}>
           <div>메시지 입력,</div>
           <div>생체신호 History</div>
           <div>회복 Histroy</div>
           <div>I-care등록관리</div>
          </div>}
      </div>

      <div className={`${styles.navBox} ${select === "room" ? styles[animation] : ""}`}>
        <div className={`${styles.navTitle} ${styles.navTitle3}`} onClick={() => toggleMenu("room")}>
          <span>알림관리</span>
        </div>
        {select === "room" && <div className={styles.navContent}>
          <div>알림 조건(추가/삭제)</div>
          <div>소리사용 유무</div>
          <div>알림UI선택</div>
          <div>알림History</div>
          <div>알림해제</div>
          </div>}
      </div>
    </>
  );
};

export default SideMenu;
