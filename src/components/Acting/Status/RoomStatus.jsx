import styles from "./RoomStatus.module.css";
import { useContext } from "react";
import { Health } from "./../../../App";

const RoomStatus = ({ setSelectedRoom }) => {

    const {data} = useContext(Health);

  const seen = new Set();
  const filterRoom = data.filter(item => {
    const room = seen.has(item.roomNumber);
    seen.add(item.roomNumber);
    return !room;
  });

  return (
      <div className={styles.roomStatusContainer}>
        <div className={styles.roomTitle}>I-care</div>
        <div className={styles.roomList}>
          {filterRoom.map((item) => (
              <div
                  className={styles.roomItem}
                  key={item.NO}
                  onClick={() => setSelectedRoom(item.roomNumber)}
              >
                {item.roomNumber}
              </div>
          ))}
        </div>
      </div>
  );
};

export default RoomStatus;
