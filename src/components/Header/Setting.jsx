import styles from "./Setting.module.css";
import { useNavigate } from "react-router-dom";

// react-router 처리 **

const Setting = () => {
  const nav = useNavigate();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.userLogin}>
        홍간호님 로그인 중
        <span>
          <img className={styles.iconLogout} src="/images/menu-icon/logout.png" />
        </span>
      </div>
      <div className={styles.nav}>
        <span>
          <img src="/images/menu-icon/alert.png" alt="" />
        </span>
        <span onClick={()=> nav("/eum")}>
          <img src="/images/menu-icon/config.png" alt="" />
        </span>
        <span onClick={()=> nav("/")}>
          <img src="/images/menu-icon/home.png" alt="" />
        </span>
      </div>
    </div>
  );
};

export default Setting;
