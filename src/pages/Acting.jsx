import "./Acting.css"
import HeaderContainer from "../components/Header/HeaderContainer"
import PatientStatus from "../components/Acting/PatientStatus"


const Acting = () =>{
   return(
     <div className="ActingContainer">
        <HeaderContainer/>
        <PatientStatus/>
     </div>
   )
}


export default Acting