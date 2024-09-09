import { useContext } from "react";
import styles from "./EndoRoom.module.css";
import Alert from "./Alert";
import { Health } from "../../App";
import { useState } from "react";
import { useEffect } from "react";

// inner-grid 반복 더미
// 회복시간 , 안정율 , 혈압 고정
const EndoRoom = ({ tempData, setTempData }) => {
  const { data } = useContext(Health);
  const [currentValue, setCurrentValue] = useState(tempData.map(() => 0));
  const [recoveryOut, setRecoveryOut] = useState(tempData.map(() => 0));
  const [selectedPatient, setSelectedPatient] = useState([]);
  // 여러 환자 위급 상황이있을때 객체로 상태를 보관 방법 생각
  // const [emergency, setEmergency] = useState({
  //   NORMAL: false,
  //   LEVEL_1_EMERGENCY: tempData.condition,
  // });
  const totalDuration = 120; // 회복시간 120분 기준
  const intervalTime = 10; // 애니메이션 단계 (10분씩 증가)
  console.log(selectedPatient)


  useEffect(() => {
    // map 으로 condition 데이터가 있는 값을 찾아서 배열 생성
    // [0,1,null,null,,,,] 모든 요소를 순회후 데이터 있는 값만 새로운 배열로 만든후
    // filter를 사용해 데이터가 있는 값만 필터링
    const emergency = tempData.map((item, index) => (item.condition ? index : null)).filter((index) => index !== null);

    setSelectedPatient(emergency);
  }, [tempData]);

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

  const emergencyClick = (index) => {
    setTempData((prevTempData) =>
      prevTempData.map((patient, i) => {
        if (i === index) {
          return { ...patient, condition: "" };
        }
        return patient;
      })
    );

    setSelectedPatient((prev) => prev.filter((item) => item !== index));
  };

  const handlePatientClick = (i) => {
    setSelectedPatient((prev) => {
      // 중복 클릭을 허용하지 않도록 중복된 환자를 제거한 뒤 배열에 추가
      const filtered = prev.filter((item) => item !== i);
      return [...filtered, i]; // 클릭된 환자를 배열의 맨 끝에 추가
    });
  };

  // {`${Math.floor(Math.random() * 150) + 50}/${Math.floor(Math.random() * 100)}`} (그리드 텍스트 심박수 )

  return (
    <div className={styles.endoContainer}>
      <div className={styles.outerGrid}>
        {tempData.map((item, i) => (
          <div
            className={`${styles.innerGrid} ${item.condition ? styles.emergencyPatient : ""}  ${
              item.condition ? (selectedPatient[selectedPatient.length - 1] === i ? styles.emergencyFocuse : "") : null
            }`}
            key={i}
            onClick={() => handlePatientClick(i)}
          >
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
            <div className={styles.innerGridText}>93/82</div>
            <div className={styles.innerGridText}></div>
            {selectedPatient.map((patientIndex) => {
              const selectedItem = tempData[patientIndex];

              if (!selectedItem || !selectedItem.condition) return null;

              return (
                <Alert
                  key={patientIndex}
                  item={selectedItem} // 선택 환자 전달
                  selectedPatient={selectedPatient}
                  currentValue={currentValue[patientIndex]}
                  totalDuration={totalDuration}
                  recoveryOut={recoveryOut[patientIndex]}
                  onConfirm={() => emergencyClick(patientIndex)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EndoRoom;
