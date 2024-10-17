import styles from "./NotificationSettings.module.css";

const NotificationSettings = ({option}) => {
  const {select,animation,toggleMenu} = option
   
  return (
    <div
      className={`${styles.navBox} ${select === "room" ? styles[animation] : ""}`}
    >
      <div
        className={`${styles.navTitle} ${styles.navTitle3}`}
        onClick={() => toggleMenu("room")}
      >
        <span>알림관리</span>
      </div>
      {select === "room" && (
        <div className={styles.navContent}>
          <div>고정멘트</div>
          <div>알림 조건(추가/삭제)</div>
          <div>소리사용 유무</div>
          <div>알림UI선택</div>
          <div>알림History</div>
          <div>알림해제</div>
        </div>
      )}
    </div>
  );
};

export default NotificationSettings;
