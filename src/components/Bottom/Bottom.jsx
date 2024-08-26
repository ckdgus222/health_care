import "./Bottom.css"
import { useNavigate } from "react-router-dom"

// status 실시간 연동


const Bottom = () =>{
   const nav = useNavigate()

 
  return(
   <div className="footerContainer">
      <div className="status">
         <span>병실:{0}</span>
         <span>병상:{0}</span>
         <span>환자:{0}</span>
         <span>자리비움:{0}</span>
      </div>
      <div className="management">
         <div onClick={()=> nav("/")}><span>회진관리</span></div>
         <div onClick={()=> nav("/Acting")}><span>액팅관리</span></div>
         <div><span>I-nurse</span></div>
      </div>
   </div>
  )
}

export default Bottom