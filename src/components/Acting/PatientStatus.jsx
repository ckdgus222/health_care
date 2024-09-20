import styles from "./PatientStatus.module.css"
import ActingTable from "./ActingTable/ActingTable"
import ActingMemo from "./ActingMemo/ActingMemo.jsx";
import MainStatus from "./Status/MainStatus"


const PatientStatus = ()=>{
   return(
      <div className={styles.patientStatus}>
        <ActingTable/>
        <MainStatus/>
          {/*<ActingMemo />*/}
      </div>
   )
}


export default PatientStatus
