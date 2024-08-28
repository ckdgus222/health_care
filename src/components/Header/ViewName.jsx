import styles from "./ViewName.module.css"




const ViewName = ({setSelects}) =>{

  return(
    <div className={styles.viewBox}>
      <h2 className={styles.viewText}>이름보기</h2>
      <label className={styles.switch}>
         <input type="checkbox" onClick={()=> setSelects((prev) => !prev)}/>
         <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  )
}

export default ViewName