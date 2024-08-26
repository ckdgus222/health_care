import "./ViewName.css"




const ViewName = ({setSelects}) =>{

  return(
    <div className="viewBox">
      <h2 className="viewText">이름보기</h2>
      <label className="switch">
         <input type="checkbox" onClick={()=> setSelects((prev) => !prev)}/>
         <span className="slider round"></span>
      </label>
    </div>
  )
}

export default ViewName