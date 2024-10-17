import { useState } from "react";
import styles from "./Right.module.css";
import { useEffect } from "react";
import { bedStatus } from "../../../Common/util/bedStatus.js";

//data item 뿌려주기 props

const Right = ({ data, onClick, isModalOpen }) => {
  const [order, setOrder] = useState({
    oxygenYes: "",
    therapyOrder10: "",
    therapyOrder20: "",
  });


  useEffect(() => {
    const updatedOrder = { ...order }; // 기존 상태 복사

    if (data.oxygenYes === 1) {
      updatedOrder.oxygenYes = "oxgen.png";
    }

    if (data.therapyOrder === 10) {
      updatedOrder.therapyOrder10 = "10.png";
    } else if (data.therapyOrder === 20) {
      updatedOrder.therapyOrder20 = "20.png";
    }

    setOrder(updatedOrder); // 상태 한 번에 업데이트
  }, [data]);






  return (
    <div className={styles.bedContainerRight}  onClick={() =>  onClick(data, order)}>
      <div style={{ position: "absolute", top: "0", right: "150px" }}>
        {order.oxygenYes && (
          <div style={{ width: "25px", height: "25px" }}>
            <img style={{ width: "100%" }} src={`/images/side-img/${order.oxygenYes}`} alt="Oxygen" />
          </div>
        )}
        {order.therapyOrder10 && (
          <div style={{ width: "25px", height: "25px" }}>
            <img style={{ width: "100%" }} src={`/images/side-img/${order.therapyOrder10}`} alt="Therapy 10" />
          </div>
        )}
        {order.therapyOrder20 && (
          <div style={{ width: "25px", height: "25px" }}>
            <img style={{ width: "100%" }} src={`/images/side-img/${order.therapyOrder20}`} alt="Therapy 20" />
          </div>
        )}
      </div>
      <div className={styles.bed} style={{ backgroundImage: `url(/images/Back-img/bed/${bedStatus(data.barStatus)})` }}>
        <img className={styles.rightImg} style={{ width: "100%" }} src={`/images/Image/${data.positionStatus}.gif`} />
      </div>
      <div className={styles.careRightBox}>
        <div className={styles.careRight}>
          <img src={`/images/side-img/fluid_${data.fluid_status}.gif`} alt="" />
        </div>
        <div className={`${styles.careRightText} ${styles[`right_${data.fluid_status}`]}`}>
          5%
          <br />
          3M
        </div>
        <div className={styles.careRight}>
          <img src="/images/side-img/heart_alert.gif" alt="" />
        </div>
        <div className={styles.careRightText}>
          {data.ecgRate}
          <br />
          {data.breathRate}
        </div>
      </div>
      <div className={styles.rightHover}>
        <p>
          <span>{data.roomNumber}</span> {data.patName}
        </p>
        <p>주치의: {data.doctorName}</p>
      </div>
    </div>
  );
};

export default Right;
