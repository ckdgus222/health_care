

import styles from "./ClinicInf.module.css"

const ClinicInf = ({option}) =>{
   const {select,animation,toggleMenu,setFooterMessage} = option
   const footerProps = (e) => {
    setFooterMessage(e.target.value);
   };
    return (
       
      <div className={`${styles.navBox} ${select === "clinic" ? styles[animation] : ""}`}>
      <div className={`${styles.navTitle} ${styles.navTitle2}`} onClick={() => toggleMenu("clinic")}>
        <span>정보관리</span>
      </div>
      {select === "clinic" && (
        <div className={styles.navContent}>
          <textarea name="공지사항" onChange={(e)=> footerProps(e)} style={{border:"none",resize:"none",width:"500px",height:"300px"}}></textarea>
        </div>
      )}
    </div>
    )
}

export default ClinicInf