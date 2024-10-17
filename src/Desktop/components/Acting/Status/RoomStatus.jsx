import styles from "./RoomStatus.module.css";
import { useContext } from "react";
import { Health } from "../../../../App";

// room number 확장 생각
const RoomStatus = ({data, setSelectedRoom}) => {


  const seen = new Set();
  const filterRoom = data.filter(item =>{
    const room = seen.has(item.roomNumber);
    seen.add(item.roomNumber);
    return !room
  })



  return (
    <div className={styles.roomBox}>
      <div className={styles.roomStatus}>I-care</div>
      {filterRoom.map((item) =>(
         <div className={styles.RoomStatus} key={item.NO} onClick={()=> setSelectedRoom(item.roomNumber)}>
            {item.roomNumber}
         </div>
      ))}
    </div>
  );
};

export default RoomStatus;
