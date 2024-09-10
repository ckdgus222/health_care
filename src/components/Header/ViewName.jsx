import styles from "./ViewName.module.css"




const ViewName = ({text,onClick}) =>{

  return(
    <div className={styles.viewBox}>
      <h2 className={styles.viewText}>{text}</h2>
      <label className={styles.switch}>
         <input type="checkbox" onClick={onClick}/>
         <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  )
}

export default ViewName