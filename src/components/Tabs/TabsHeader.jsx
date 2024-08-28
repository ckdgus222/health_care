import styles from "./TabsHeader.module.css"
import Button from "../Button"

const TabsHeader = ({menuTab, setTab}) =>{

  const closeTab = ()=>{
   setTab(false)
  }

   return(
     <div className={styles.tabHeader}>
        <div className={styles.tabHeaderText}>
           <span>{menuTab}</span>
           <span>  옵션</span>
        </div>
        <div className={styles.tabHeaderClose}>
         <Button text={"X"} onClick={closeTab} />
        </div>
     </div>
   )
}

export default TabsHeader