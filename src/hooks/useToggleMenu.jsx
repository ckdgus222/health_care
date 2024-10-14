import { useState } from "react"


const useToggleMenu = () =>{
    const [select, setSelect] = useState(null)
    const [animation, setAnimation] = useState("")
 

    const toggleMenu = (menu) => {
        if (select === menu) {
          setAnimation("collapse");
          setTimeout(() => {
            setSelect(null);
            setAnimation("");
          }, 800);
        } else {
          setSelect(menu);
          setAnimation("expand");
        }
      };

    return {select,animation,toggleMenu}
}

export default useToggleMenu