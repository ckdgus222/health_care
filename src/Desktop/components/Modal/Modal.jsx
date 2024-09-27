import styles from "./Modal.module.css";
import RoomBox from "../Room/RoomBox";
import { useEffect, useState } from "react";
import { bedStatus } from "../../../Common/util/bedStatus.js";

// 모달 데이터 레이아웃 필요

const Modal = ({ data, viewType, onClose }) => {
  const [any, setAny] = useState("");

  const handleClose = () => {
    onClose();
  };


  useEffect(() => {
    let time = setTimeout(() => {
      setAny("modalOpen");
    }, 100);

    return () => {
      clearTimeout(time);
      setAny("");
    };
  }, []);


  if (!data) return null;

  return (
    <>
      <div className={styles.modalOverlay} onClick={handleClose}></div>
      <div className={`${styles.modalContainer} ${styles.modalOpen}`}>
        <div className={styles.modalBox}>
          <h2>{viewType === "room" ? `Room ${data.left[0].roomNumber}` : `Patient ${data.NO}`}</h2>
          {viewType === "room" ? (
            <>
              <RoomBox width={"400px"} text={"하이"} leftData={data.left} rightData={data.right} />
            </>
          ) : (
            <div className={styles.modalPatient}>
              <div className={styles.bedContainerRightModal}>
                <div style={{ position: "absolute", top: "0", right: "150px" }}>
                  {data.order?.oxygenYes && (
                    <div style={{ width: "25px", height: "25px" }}>
                      <img style={{ width: "100%" }} src={`/images/side-img/${data.order.oxygenYes}`} alt="Oxygen" />
                    </div>
                  )}
                  {data.order?.therapyOrder10 && (
                    <div style={{ width: "25px", height: "25px" }}>
                      <img style={{ width: "100%" }} src={`/images/side-img/${data.order.therapyOrder10}`} alt="Therapy 10" />
                    </div>
                  )}
                  {data.order?.therapyOrder20 && (
                    <div style={{ width: "25px", height: "25px" }}>
                      <img style={{ width: "100%" }} src={`/images/side-img/${data.order.therapyOrder20}`} alt="Therapy 20" />
                    </div>
                  )}
                </div>
                <div className={styles.bed} style={{ backgroundImage: `url(/images/Back-img/bed/${bedStatus(data.barStatus)})` }}>
                  <img className={styles.rightImg} style={{ width: "100%" }} src={`/images/Image/${data.positionStatus}.gif`} alt="Position Status" />
                </div>
                <div className={styles.careRightBox}>
                  <div className={styles.careRightModal}>
                    <img src={`/images/side-img/fluid_${data.fluid_status}.gif`} alt="Fluid Out" />
                  </div>
                  <div className={`${styles.careLeftTextModal} ${styles[data.fluid_status]}`}>
                    5%
                    <br />
                    3M
                  </div>
                  <div className={styles.careRightModal}>
                    <img src="/images/side-img/heart_alert.gif" alt="Heart Alert" />
                  </div>
                  <div className={styles.careRightTextModal}>
                    {data.ecgRate}
                    <br />
                    {data.breathRate}
                  </div>
                </div>
              </div>
              <div className={styles.modalStatus}>
                <p>{data.roomNumber}</p>
                <p>{data.patName}</p>
              </div>
            </div>
          )}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
