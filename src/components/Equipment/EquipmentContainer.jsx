import React, { useContext } from "react";
import styles from "./EquipmentContainer.module.css";
import { Health } from "../../App.jsx";

const EquipmentContainer = () => {
  let { data, roomData, equipmentData } = useContext(Health);

  const getEquipmentSymbol = (type) => {
    switch (type) {
      case "wheelchair":
        return "♿️";
      case "syringe":
        return "💉";
      case "bed":
        return "🛏️";
      case "monitor":
        return "🖥️";
      case "oxygen":
        return "💨";
      default:
        return "❓";
    }
  };

  return (
    <div className={styles.equipment_container}>
      {equipmentData.map((roomData) => (
        <div key={roomData.room} className={styles["equipment-roomContainer"]}>
          <img
            src={"images/floor-img/ExampleFloor.png"}
            alt={`Room ${roomData.room}`}
            className={styles["equipment-roomImage"]}
          />
          {roomData.equipment.map((equipment, index) => (
            <div
              key={index}
              className={styles.equipment}
              style={{ top: equipment.y, left: equipment.x }}
              title={`Type: ${equipment.type}, Code: ${equipment.code}`} // Tooltip with type and code
            >
              {getEquipmentSymbol(equipment.type)}
            </div>
          ))}
          <div className={styles["equipment-roomNumber"]}>
            Room {roomData.room}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EquipmentContainer;
