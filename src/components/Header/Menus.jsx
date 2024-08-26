import "./Menus.css";
import { menuList } from "../../util/menuConst";

//menu list
//menu 카테고리에 맞게 컴포넌트 개발

const Menus = ({ setMenuTab,setTab,menuTab }) => {
  

  return (
    <div className="menuBox">
      <ul className="menuList">
        {menuList.map((item, i)=> (
         <li className="list" key={i} onClick={() => { setMenuTab(item)
             setTab(prev =>{
             if(menuTab === item && prev){
               return false
             }else{
               return true
             }
         })}}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menus;

