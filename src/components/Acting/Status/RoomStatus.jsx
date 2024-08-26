import "./RoomStatus.css";
import { useContext } from "react";
import { Health } from "./../../../App";

// room number 확장 생각
const RoomStatus = ({data, setSelectedRoom}) => {
  console.log(data); 
   
  const seen = new Set();
  const filterRoom = data.filter(item =>{
    const room = seen.has(item.roomNumber);
    seen.add(item.roomNumber);
    return !room
  })

   

  return (
    <div className="room-box">
      <div className="room-status">I-care</div>
      {filterRoom.map((item) =>(
         <div className="room-status" key={item.NO} onClick={()=> setSelectedRoom(item.roomNumber)}>
            {item.roomNumber}
         </div>
      ))}
    </div>
  );
};

export default RoomStatus;
