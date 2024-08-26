import "./SideBox.css"
import Right from "../../Room/Right"
import Left from "../../Room/Left"
import { Health } from "../../../App"
import { useContext } from "react"

// 병실번호를 누르면 그 병실에 맞게 렌더링

const SideBox = ({data,selectedRoom}) => {
   
      
   // const chunkedData = [];
   // for(let i = 0; i < data.length; i += 6){
   //    chunkedData.push(data.slice(i, i + 6)); 
   // }
   // console.log(Array.from(new Set(data.map(item => item.roomNumber))))
   const filterData = selectedRoom ? data.filter(item => item.roomNumber === selectedRoom) : [];
   console.log(filterData)
   
   const leftData = filterData.slice(0,3)
   const rightData = filterData.slice(3,6)
 
   return(
     <div className="side-box">
           <div className="left_column_acting">
           {leftData.map((item) => (
            <Left key={item.NO} data={item} />
          ))}
           </div>
           <div className="right_column_acting">
           {rightData.map((item) => (
            <Right key={item.NO} data={item} />
          ))}
           </div>

     </div>
   )
}


export default SideBox