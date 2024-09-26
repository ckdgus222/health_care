import HeaderContainer from "../components/Header/HeaderContainer"
import RoomContainer from "../components/Room/RoomContainer"
import EquipmentContainer from "../components/Equipment/EquipmentContainer"
import Bottom from "../components/Bottom/Bottom"
import styles from "./RoomMain.module.css"
import { useState } from "react"
import Header from "../components/MUI/Header.jsx";

const RoomMain = () => {
  const [menuTab, setMenuTab] = useState(null);
  const [isTab, setTab] = useState(false);
  const [selects, setSelects] = useState(false);
  const [roomAir, setRoomAir] = useState(false);
  const [equipment, setEquipment] = useState(false);

  const setRoomAirHandler = () => {
    if (!roomAir) {
      setRoomAir(true);
      setEquipment(false);
    } else {
      setRoomAir(false);
    }
  };

  const setEquipmentHandler = () => {
    if (!equipment) {
      setEquipment(true);
      setRoomAir(false);
    } else {
      setEquipment(false);
    }
  };

  return (
    <div className={styles.roomContainer}>
      <HeaderContainer
        setRoomAir={setRoomAirHandler}
        setSelects={setSelects}
        menuTab={menuTab}
        setTab={setTab}
        setMenuTab={setMenuTab}
        setEquipment={setEquipmentHandler}
        roomAir={roomAir}
        equipment={equipment}
      />
      {/*<Header />*/}
      {equipment && (
        <EquipmentContainer
          selects={selects}
          menuTab={menuTab}
          isTab={isTab}
          setTab={setTab}
        />
      )}
      {!equipment && (
        <RoomContainer
          roomAir={roomAir}
          selects={selects}
          menuTab={menuTab}
          isTab={isTab}
          setTab={setTab}
        />
      )}
      <Bottom />
    </div>
  );
};

export default RoomMain;
