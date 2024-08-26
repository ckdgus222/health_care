import Header from "./Header";
import Eums from "./Eums";
import Fieldset from "./Fieldset";
import ViewName from "./Viewname";
import Menus from "./Menus";
import Setting from "./Setting";
import "./HeaderContainer.css"


const HeaderContainer = ({setMenuTab, setTab ,menuTab}) =>{
   return(
      <div className="main">
         <Header>
            <Eums/>
            <ViewName/>
            <Fieldset/>
            <Menus menuTab={menuTab} setMenuTab={setMenuTab} setTab={setTab}/> 
            <Setting/>
         </Header>
      </div>
   )
}

export default HeaderContainer