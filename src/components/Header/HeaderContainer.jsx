import Header from "./Header";
import Eums from "./Eums";
import Fieldset from "./Fieldset";
import ViewName from "./ViewName";
import Menus from "./Menus";
import Button from "../Button";
import Setting from "./Setting";
import styles from "./HeaderContainer.module.css";

const HeaderContainer = ({ setRoomAir,setSelects, setMenuTab, setTab, menuTab }) => {

  return (
    <div className={styles.main}>
      <Header>
        <Eums />
        <ViewName text="이름보기" onClick={()=> setSelects(prev => !prev)} />
        <Fieldset />
        <ViewName text="병실환경" onClick={()=> setRoomAir(prev => !prev)}/>
        <Menus menuTab={menuTab} setMenuTab={setMenuTab} setTab={setTab} />
        <Setting />
      </Header>
    </div>
  );
};

export default HeaderContainer;
