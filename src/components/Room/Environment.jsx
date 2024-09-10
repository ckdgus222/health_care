import styles from "./Environment.module.css";

const Environment = ({ roomData }) => {
   const co2Status = (status) => {
      switch (status) {
        case 'good':
          return 'conic-gradient(green 0% 100%)'; // 전체 초록색
        case 'normal':
          return 'conic-gradient(green 0% 33%, yellow 33% 100%)'; // 초록과 노랑
        case 'bad':
          return 'conic-gradient(green 0% 33%, yellow 33% 66%, red 66% 100%)'; // 초록, 노랑, 빨강
        default:
          return 'conic-gradient(green 0% 100%)'; // 기본 초록색
      }
    };

  return (
   <div className={styles.environmentContainer}>
      <div className={styles.donutContainer}>
        <div
          className={styles.donut}
          style={{ background: co2Status(roomData.status) }}
        ></div>
      </div>
      <div className="">Room {roomData.room}</div>
    </div>
  );
};

export default Environment;
