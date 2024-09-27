import React from "react";
import styles from "./EquipmentTooltip.module.css";

const EquipmentTooltip = ({ mousePosition, equipment }) => {
  const isNearRightEdge =
    mousePosition.x > window.innerWidth - window.innerWidth / 6;

  const tooltipPosition = {
    top: mousePosition.y - 50,
    left: isNearRightEdge ? mousePosition.x - 120 : mousePosition.x,
  };

  return (
    <div className={styles.tooltip} style={tooltipPosition}>
      <p>Type: {equipment.type}</p>
      <p>Code: {equipment.code}</p>
    </div>
  );
};

export default EquipmentTooltip;
