import React, { useContext, useState } from "react";
import styles from "./EquipmentContainer.module.css";
import EquipmentTooltip from "./EquipmentTooltip"; // Import the new tooltip component
import { Health } from "../../../App.jsx";

const EquipmentContainer = () => {
  let { equipmentData } = useContext(Health);
  const [hoveredEquipment, setHoveredEquipment] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const getEquipmentImage = (type) => {
    switch (type) {
      case "wheelchair":
        return "/images/equipments/wheelchair.png";
      case "iv-stand":
        return "/images/equipments/iv-stand.png";
      default:
        return null;
    }
  };

  const handleMouseEnter = (equipment, event) => {
    setHoveredEquipment(equipment);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredEquipment(null);
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
              onMouseEnter={(event) => handleMouseEnter(equipment, event)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {getEquipmentImage(equipment.type) && (
                <img
                  src={getEquipmentImage(equipment.type)}
                  alt={equipment.type}
                  className={styles.equipmentImage}
                />
              )}
            </div>
          ))}
          <div className={styles["equipment-roomNumber"]}>
            Room {roomData.room}
          </div>
        </div>
      ))}

      {hoveredEquipment && (
        <EquipmentTooltip
          mousePosition={mousePosition}
          equipment={hoveredEquipment}
        />
      )}
    </div>
  );
};

export default EquipmentContainer;
