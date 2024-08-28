import { useState,useEffect,use } from "react"
import styles from "./Fieldset.module.css"
import { useContext } from "react"
import { Selected } from "../../App"


const fieldSelect = ["전체","난간","수액G","수액A","수액C","산소","수행","I-care"]

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
   <div className={styles.fieldsetBox}>
      <fieldset className={styles.fieldSet}>
        {fieldSelect.map((item, i) => (
          <label className={styles.labelStyle} key={i}>
            <input type="radio" value={item} name="contact" className={styles.radioInput} checked={selected === item} onChange={()=> handleOptionChange(item)}/>
            <span className={styles.customRadio}></span>
            <p style={{ marginTop: "0" ,color:"#FFF"}}>{item}</p>
          </label>
        ))}
      </fieldset>
    </div>
  )
}


export default Fieldset