import "./TabsHeader.css"
import Button from "../Button"

const TabsHeader = ({menuTab, setTab}) =>{

  const closeTab = ()=>{
   setTab(false)
  }

   return(
     <div className="tab_header">
        <div className="tab_header_text">
           <span>{menuTab}</span>
           <span>  옵션</span>
        </div>
        <div className="tab_header_close">
         <Button text={"X"} onClick={closeTab} />
        </div>
     </div>
   )
}

export default TabsHeader