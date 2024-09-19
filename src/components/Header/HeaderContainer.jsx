import Header from "./Header";
import Eums from "./Eums";
import Fieldset from "./Fieldset";
import ViewName from "./ViewName";
import Menus from "./Menus";
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
    <Header>
      <div className={styles.leftSection}>
        <Eums />
      </div>
      <div className={styles.centerSection}>
        <ViewName text="이름보기" onClick={() => setSelects((prev) => !prev)} />
        <Fieldset />
        <ViewName text="병실환경" onClick={setRoomAir} checked={roomAir} />
        <ViewName text="기구관리" onClick={setEquipment} checked={equipment} />
        <Menus menuTab={menuTab} setMenuTab={setMenuTab} setTab={setTab} />
      </div>
      <div className={styles.rightSection}>
        <Setting />
      </div>
    </Header>
  );
};

export default HeaderContainer;
