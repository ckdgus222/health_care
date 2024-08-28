import styles from "./Eums.module.css"
import { useNavigate } from "react-router-dom"

const Eums = () =>{
   const nav = useNavigate()


   return(
      <div className={styles.eumsBox} onClick={()=> nav("/")}>
         <span className={styles.headEum}>EUM:care</span> {/** 변경 가능 */}
         <span className={styles.headWard}>0511</span> {/** 변경 가능 */}
      </div>
   )
}

export default Eums