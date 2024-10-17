import {useState} from "react";
import SideMenu from "./SideMenu";
import EndoFooter from "./EndoFooter";





const FooterContainer = () =>{
    const [footerMessage,setFooterMessage] = useState("")

    return (
      <>
        <SideMenu setFooterMessage={setFooterMessage}/>
        <EndoFooter footerMessage={footerMessage}/>
      </>
    )
}

export default FooterContainer