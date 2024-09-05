import { useContext } from "react";
import styles from "./EndoRoom.module.css";
import Alert from "./Alert";
import { Health } from "../../App";
import { useState } from "react";
import { useEffect } from "react";

// inner-grid 반복 더미
// 회복시간 , 안정율 , 혈압 고정
const EndoRoom = ({ tempData }) => {
  const { data } = useContext(Health);
  const [currentValue, setCurrentValue] = useState(tempData.map(() => 0));
  const [recoveryOut, setRecoveryOut] = useState(tempData.map(() => 0));
  const [emergency, setEmergency] = useState({
    NORMAL: false,
    LEVEL_1_EMERGENCY: false,
  });
  const totalDuration = 120; // 회복시간 120분 기준
  const intervalTime = 10; // 애니메이션 단계 (10분씩 증가)
 

  // 상태랜덤
  // const arr = [];
  // for (let i = 0; i < 15; i++) {
  //   const randomArp = ["a", "b", "n"];
  //   const max = Math.floor(Math.random() * 3);
  //   arr.push(randomArp[max]);
  // }
  
  // 위급상황 필터링 
  const filterPatients = ()=> {
    return tempData.filter(
      (item) => item.condition === "주사" || item.condition === "낙상"
    )
  }
  // 위급상황 단계별로 구해야함
  const emergencyClick = (item)=>{
    if(item.condition){
      setEmergency((prev)=>({
        ...prev,
        LEVEL_1_EMERGENCY: item.condition
      }))
      return
    }
    return 
  }
  // 위급상황 데이터 필터링후
  // 레벨 1,2 단계로 나눈후 상태 업데이트
  useEffect(()=>{
    const filterData = filterPatients()
    filterData.forEach((patient)=>{
      if(patient.condition === "주사"){
        setEmergency((prev)=> ({
          ...prev,
          LEVEL_1_EMERGENCY: true,
        }))
      }else if(patient.condition === "낙상"){
        setEmergency((prev)=>({
          ...prev,
          LEVEL_2_EMERGENCY: true,
        }))
      }
    })
  }, [tempData])


  useEffect(() => {
    const intervals = tempData.map((item, index) => {
      const recoveryTime = item.recovery; // 환자에 총 회복시간 // 개개인이 다 다름
      const firstStageEnd = recoveryTime - intervalTime; // 총 회복시간 - 애니메이션 단계(10 단위씩)
      const intervalDuration = (recoveryTime / totalDuration) * 1 * 6 * 1000; // 10 * 60 // 10분기준

      let currentStep = 0;

      const firstInterval = setInterval(() => {
        if (currentStep * intervalTime < firstStageEnd) {
          setCurrentValue((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = (currentStep + 1) * intervalTime;
            return newValues;
          });
          currentStep++;
        } else {
          clearInterval(firstInterval);

          // 두 번째 단계: 마지막 10분 동안 깜빡이는 애니메이션
          const blinkInterval = setInterval(() => {
            setCurrentValue((prevValues) => {
              const newValues = [...prevValues];
              newValues[index] = prevValues[index] === firstStageEnd ? recoveryTime : firstStageEnd;
              return newValues;
            });
          }, 1000); // 깜빡이는 속도 (1초)

          setTimeout(() => {
            clearInterval(blinkInterval);
            setCurrentValue((prevValues) => {
              const newValues = [...prevValues];
              newValues[index] = recoveryTime; // 마지막 값을 고정
              return newValues;
            });
          }, (intervalTime / 10) * 60 * 1000); // 깜빡임 종료 시간 (예: 10분)
        }
      }, intervalDuration); // 첫 번째 단계는 실제 회복 시간에 맞춰 업데이트
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [tempData, intervalTime]);

  // 회복시간 로직
  // 회복시간 json 데이터에서 1분씩 차감
  useEffect(() => {
    const timeOut = tempData.map((item, i) => {
      return setInterval(() => {
        setRecoveryOut((prev) => {
          const newTime = [...prev];
          if (newTime[i] < item.recovery) {
            newTime[i] += 1;
          }
          return newTime;
        });
      }, 6000); // 1분 간격  // 시간타임 간격
    });

    return () => timeOut.forEach((interval) => clearInterval(interval));
  }, [tempData]);

  
  return (
    <div className={styles.endoContainer}>
      <div className={styles.outerGrid}>
        {tempData.map((item, i) => (
          <div className={`${styles.innerGrid} ${item.condition && styles.emergencyPatient}`} key={i} onClick={()=>emergencyClick(item)}>
            <div className={`${styles.innerGridImg}`} style={{ backgroundImage: `url(/images/Image/${item.positionStatus}.gif)` }}>
              <img src={`/images/Back-img/bed/${item.barStatus}.png`} alt="" />
            </div>
            <div className={styles.innerGridBar}>
              <div
                className={styles.recoveryTime}
                style={{
                  width: `${(currentValue[i] / totalDuration) * 100}%`,
                  backgroundColor: "green",
                  transition: "width 0.5s ease-in-out",
                }}
              ></div>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <div className={styles.innerGridText} style={{ color: recoveryOut[i] >= item.recovery ? "red" : "white" }}>{`${recoveryOut[i]}M`}</div>
              <div className={styles.innerGridText}>{`G${i + 5}`}</div>
            </div>
            <div className={styles.innerGridText} style={{ gridArea: "5/3/6/5" }}>
              {item.ecgRate}
            </div>
            <div className={styles.innerGridText} style={{ color: "dimgray" }}>
              {item.breathRate}
            </div>
            <div className={styles.innerGridText}>{`${Math.floor(Math.random() * 150) + 50}/${Math.floor(Math.random() * 100)}`}</div>
            <div className={styles.innerGridText}></div>
            { item.condition === emergency.LEVEL_1_EMERGENCY && (
              <Alert item={item} i={i} emergencyLevel={setEmergency} currentValue={currentValue[i]} totalDuration={totalDuration} recoveryOut={recoveryOut[i]}/>
            )}
            {/* {item.condition === "낙상" && emergency.LEVEL_2_EMERGENCY && (
              <Alert item={item} emergencyLevel={emergency.LEVEL_2_EMERGENCY} />
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EndoRoom;
