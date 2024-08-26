import "./MainStatus.css"
import RoomStatus from "./RoomStatus"
import Left from "../../Room/Left"
import Right from "../../Room/Right"
import SideBox from "./SideBox"
import { useContext } from "react";
import { Health } from "./../../../App";
import { useState } from "react"



const MainStatus = ()=> {
   const {data} = useContext(Health);
   const [selectedRoom, setSelectedRoom] = useState("5111");

   

   return(
      <div className="main-status">
        <RoomStatus data={data} setSelectedRoom={setSelectedRoom}/>
        <SideBox data={data} selectedRoom={selectedRoom}/>
      </div>
   )
}


export default MainStatus
