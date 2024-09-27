import styles from "./EndoFooter.module.css"


const EndoFooter = ()=>{
   return (
      <div className={styles.footerBox}>
        <div className={styles.footerText}>
        시술로 인하여 검사시간이 예약시간보다 30분 정도 지연되고 있습니다. 양해 부탁드립니다. 안심의 솔루션을 제공하는 알비즈모어 EUM: endo 스마트 솔루션입니다
        </div>
      </div>
   )
}

export default EndoFooter