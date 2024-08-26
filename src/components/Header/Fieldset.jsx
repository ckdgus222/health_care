import { useState,useEffect,use } from "react"
import "./Fieldset.css"
import { useContext } from "react"
import { Selected } from "../../App"


const fieldSelect = ["전체","수액","난간","심박","예약","산소","i-care"]

const Fieldset = () =>{
  const [selected, setSelected] = useState(null)
  const {setCategory} = useContext(Selected)

  useEffect(()=>{
   if(fieldSelect.length > 0){
      setSelected(fieldSelect[0]);
   }
  },[]);

  const handleOptionChange = (option) =>{
   setSelected(option)
   setCategory(option)
  }

  
  return(
   <div className="fieldsetBox">
      <fieldset className="fieldset">
        {fieldSelect.map((item, i) => (
          <label className="labelStyle" key={i}>
            <input type="radio" value={item} name="contact" className="radioInput" checked={selected === item} onChange={()=> handleOptionChange(item)}/>
            <span className="customRadio"></span>
            <p style={{ marginTop: "0" ,color:"#FFF"}}>{item}</p>
          </label>
        ))}
      </fieldset>
    </div>
  )
}


export default Fieldset