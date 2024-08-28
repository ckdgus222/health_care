import Header from "./Header";
import Eums from "./Eums";
import Fieldset from "./Fieldset";
import ViewName from "./ViewName";
import Menus from "./Menus";
import Setting from "./Setting";
import styles from "./HeaderContainer.module.css";

const HeaderContainer = ({ setSelects, setMenuTab, setTab, menuTab }) => {

  return (
    <div className={styles.main}>
      <Header>
        <Eums />
        <ViewName setSelects={setSelects} />
        <Fieldset />
        <Menus menuTab={menuTab} setMenuTab={setMenuTab} setTab={setTab} />
        <Setting />
      </Header>
    </div>
  );
};

export default HeaderContainer;
