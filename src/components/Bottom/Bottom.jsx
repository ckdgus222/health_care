import { useContext } from "react";
import styles from "./Bottom.module.css";
import { useNavigate } from "react-router-dom";
import { Health } from "../../App";

// status 실시간 연동

const Bottom = () => {
  const nav = useNavigate();
  const { data } = useContext(Health);

  const patientTotal = () => {
    return data.filter((item) => item.positionStatus !== "999a").length;
  };
  const patientAway = () => {
    return data.filter((item) => item.positionStatus === "999a").length;
  };
  const totalWard = () => {
    const roomNumbers = data.filter((item) => item.roomNumber).map((item) => item.roomNumber);

    const uniqueRoomNumber = new Set(roomNumbers);

    return Array.from(uniqueRoomNumber).length;
  };

  return (
    <div className={styles.footerContainer}>
      <div className={styles.status}>
        <span>병실:{totalWard()}</span>
        <span>병상:{data.length}</span>
        <span>환자:{patientTotal()}</span>
        <span>자리비움:{patientAway()}</span>
      </div>
      <div className={styles.management}>
        <div onClick={() => nav("/")}>
          <span>회진관리</span>
        </div>
        <div onClick={() => nav("/Acting")}>
          <span>액팅관리</span>
        </div>
        <div>
          <span>I-nurse</span>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
