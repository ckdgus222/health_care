import Header from "./Header";
import Eums from "./Eums";
import Fieldset from "./Fieldset";
import ViewName from "./ViewName";
import Menus from "./Menus";
import Button from "../Button";
import Setting from "./Setting";
import styles from "./HeaderContainer.module.css";

const HeaderContainer = ({
  setRoomAir,
  setEquipment,
  setSelects,
  setMenuTab,
  setTab,
  menuTab,
  roomAir,
  equipment,
}) => {
  return (
    <div className={styles.main}>
      <Header>
        <Eums />
        <ViewName text="이름보기" onClick={() => setSelects((prev) => !prev)} />
        <Fieldset />
        <ViewName
          text="병실환경"
          onClick={setRoomAir}
          checked={roomAir} // Bind roomAir state
        />
        <ViewName
          text="기구관리"
          onClick={setEquipment}
          checked={equipment} // Bind equipment state
        />
        <Menus menuTab={menuTab} setMenuTab={setMenuTab} setTab={setTab} />
        <Setting />
      </Header>
    </div>
  );
};

export default HeaderContainer;
