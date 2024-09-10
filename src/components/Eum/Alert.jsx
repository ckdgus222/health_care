import styles from "./Alert.module.css";
import Button from "../Button";
import { memo } from "react";

const Alert = ({ item, selectedPatient, currentValue, totalDuration, recoveryOut, onConfirm }) => {
   
  return (
    <>
      <div className={styles.alertBox}>
        <div className={styles.countBox}>{selectedPatient.length}</div>
        <div className={styles.patientStatus}>
          <div className={styles.inner}>
            <div className={styles.innerGridImg} style={{ backgroundImage: `url(/images/Image/${item.positionStatus}.gif)` }}>
              <img src={`/images/Back-img/bed/${item.barStatus}.png`} alt="" />
            </div>
            <div className={styles.barBox}>
              <div className={styles.innerGridBar}>
                <div
                  className={styles.recoveryTime}
                  style={{
                    width: `${(currentValue / totalDuration) * 100}%`,
                    backgroundColor: "green",
                    transition: "width 0.5s ease-in-out",
                  }}
                ></div>
              </div>
              <div style={{ display: "flex", gap: "5px" }}>
                <div className={styles.innerGridText} style={{ color: recoveryOut >= item.recovery ? "red" : "white" }}>
                  {`${recoveryOut}M`}
                </div>
                <div className={styles.innerGridText}>{`G${currentValue + 5}`}</div>
              </div>
            </div>
            <div className={styles.statusBox}>
              <div className={styles.innerGridText}>95/42</div>
              <div className={styles.innerGridText}></div>
              <div className={styles.innerGridText} style={{ gridArea: "5/3/6/5" }}>
                {item.ecgRate}
              </div>
              <div className={styles.innerGridText} style={{ color: "dimgray" }}>
                {item.breathRate}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.informationBox}>
          <p>이름:<span>{item.patName}</span></p>
          <p>심박:<span>{item.ecgRate}</span></p>
          <p>호흡:<span>{item.breathRate}</span></p>
          <p>혈압:<span>95</span></p>
          <p>Spo2:<span>{item.patName}</span></p>
          <p>회복시간:<span>{item.recovery}M</span></p>
          <p>안정율:<span>{item.patName}</span></p>
          <Button text="확인" onClick={onConfirm} />
        </div>
      </div>
    </>
  );
};

export default memo(Alert, (prevProps, nextProps) => {
   // 이전과 다음 props를 비교하여 렌더링이 필요한지 판단
   return (
     prevProps.item === nextProps.item && 
     prevProps.selectedPatient.length === nextProps.selectedPatient.length &&
     prevProps.currentValue === nextProps.currentValue &&
     prevProps.recoveryOut === nextProps.recoveryOut
   );
 });