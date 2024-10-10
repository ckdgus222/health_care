import styles from "./Enm.module.css"
import EndoRoom from "../components/Eum/EndoRoom"
import TableBox from "../components/Eum/TableBox"
import EndoFooter from "../components/Eum/EndoFooter"
import { Health } from "../App"
import { useContext } from "react"
import { useState } from "react"


const Eum = ()=>{
   const { data } = useContext(Health);
   const [tempData, setTempData] = useState(data)
   const [footerMessge,setFooterMessage] = useState("")
   
   
   // Eum Box 데이터 < slice 사용 x
   const tempDataSlice = tempData.slice(0,15)
   //data.slice(0,10)

   return(
      <div className={styles.eumContainer}>
        <EndoRoom tempData={tempDataSlice} setTempData={setTempData}/>
        <TableBox tempData={tempDataSlice} footerMessage={footerMessge} setFooterMessage={setFooterMessage}/>
        <EndoFooter footerMessage={footerMessge}/>
      </div>
   )
}

export default Eum