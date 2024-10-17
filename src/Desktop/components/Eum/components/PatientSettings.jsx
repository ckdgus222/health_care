import React,{useState} from "react";
import styles from "./PatientSettings.module.css";

const PatientSettings = ({ option }) => {
  const {
    select,
    animation,
    toggleMenu,// dataMappings 추가
 } = option;
  
 
  return (
    <div className={`${styles.navBox} ${select === "patient" ? styles[animation] : ""}`}>
      <div className={`${styles.navTitle} ${styles.navTitle1}`} onClick={() => toggleMenu("patient")}>
        <span>환경설정</span>
      </div>
      {select === "patient" && (
        <div className={styles.navContent}>
          <div className={styles.dataMatching}>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientSettings;
