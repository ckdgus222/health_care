import styles from "./Enm.module.css"
import EndoRoom from "../components/Eum/EndoRoom"
import TableBox from "../components/Eum/TableBox"
import { Health } from "../App"
import { useContext } from "react"


const Eum = ()=>{
   const { data } = useContext(Health);
  
   const tempData = data.slice(0,15)

   return(
      <div className={styles.eumContainer}>
        <EndoRoom tempData={tempData}/>
        <TableBox tempData={tempData}/>
      </div>
   )
}

export default Eum