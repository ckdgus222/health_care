import styles from "./PatientStatus.module.css"
import ActingTable from "./Table/ActingTable"
import MainStatus from "./Status/MainStatus"


const PatientStatus = ()=>{
   return(
      <div className={styles.patientStatus}>  
        <ActingTable/>
        <MainStatus/>
      </div>
   )
}


export default PatientStatus