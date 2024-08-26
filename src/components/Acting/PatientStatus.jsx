import "./PatientStatus.css"
import ActingTable from "./Table/ActingTable"
import MainStatus from "./Status/MainStatus"


const PatientStatus = ()=>{
   return(
      <div className="patient-status">  
        <ActingTable/>
        <MainStatus/>
      </div>
   )
}


export default PatientStatus