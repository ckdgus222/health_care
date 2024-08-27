import "./Eums.css"
import { useNavigate } from "react-router-dom"

const Eums = () =>{
   const nav = useNavigate()


   return(
      <div className="eumsBox" onClick={()=> nav("/")}>
         <span className="head-eum">EUM:care</span> {/** 변경 가능 */}
         <span className="head-ward">0511</span> {/** 변경 가능 */}
      </div>
   )
}

export default Eums