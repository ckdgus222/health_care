import { useContext } from "react";
import styles from "./EndoRoom.module.css";
import { Health } from "../../App";

// inner-grid 반복 더미
// 회복시간 , 안정율 , 혈압 고정
const EndoRoom = ({tempData}) => {
  const { data } = useContext(Health);


   const arr = []
   for(let i = 0; i < 15; i++){
      const randomArp = ["a","b","n"]
      const max = Math.floor(Math.random() * 3)
      arr.push(randomArp[max])
   }

  

  return (
    <div className={styles.endoContainer}>
      <div className={styles.outerGrid}>
       {tempData.map((item,i)=>(
         <div className={styles.innerGrid} key={i}>
           <div className={styles.innerGridImg} style={{ backgroundImage: `url(/images/Image/${item.positionStatus}.gif)` }}>
             <img src={`/images/Back-img/bed/${item.barStatus}.png`} alt="" />
           </div>
           <div className={styles.innerGridBar} style={{ backgroundImage: `url(/images/side-img/endoLevel_${arr[i]}.gif)` }}></div>
           <div className={styles.innerGridText}>{`${Math.floor(Math.random() * 60)}M`}</div>
           <div className={styles.innerGridText}>{`G${Math.floor(Math.random() * 5 + 1)}`}</div>
           <div className={styles.innerGridText} style={{ gridArea: "5/3/6/5" }}>
             {item.ecgRate}
           </div>
           <div className={styles.innerGridText} style={{color:"dimgray"}}>{item.breathRate}</div>
           <div className={styles.innerGridText}>{`${Math.floor(Math.random() * 150) + 50}/${Math.floor(Math.random() * 100)}`}</div>
           <div className={styles.innerGridText}></div>
         </div>
       ))}
      </div>
    </div>
  );
};

export default EndoRoom;
