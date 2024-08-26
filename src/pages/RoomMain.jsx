import HeaderContainer from "../components/Header/HeaderContainer"
import RoomContainer from "../components/Room/RoomContainer"
import Bottom from "../components/Bottom/Bottom"
import "./RoomMain.css"
import { useState } from "react"

const RoomMain = () =>{
  const [menuTab, setMenuTab] = useState(null)
  const [isTab, setTab] = useState(false)

  
  

  return (
    <div className="RoomContainer">
      <HeaderContainer menuTab={menuTab} setTab={setTab} setMenuTab={setMenuTab}/>
      <RoomContainer  menuTab={menuTab} isTab={isTab} setTab={setTab}/>
      <Bottom/>
    </div>
  )
}

export default RoomMain