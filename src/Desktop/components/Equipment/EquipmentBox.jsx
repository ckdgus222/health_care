import React from "react";
import styles from "./EquipmentBox.module.css";

const EquipmentBox = ({
  equipmentData,
  selects,
  isModalOpen,
  setModalOpen,
}) => {
  return (
    <div className={styles.equipmentBox}>
      {equipmentData.map((item) => (
        <div key={item.id} className={styles.equipmentItem}>
          <p>{item.name}</p>
          {/* 필요에 따라 추가적인 장비 정보를 표시합니다 */}
        </div>
      ))}
    </div>
  );
};

export default EquipmentBox;
