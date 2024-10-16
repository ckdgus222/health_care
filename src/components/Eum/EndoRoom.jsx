import styles from "./EndoRoom.module.css";
import Alert from "./Alert";
import HeartImg from "./../../../public/icons/heart.png";
import useMqtt from "../../hooks/useMqtt";
import { poseData, barData } from "../../util/mqttData";

import {
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
  useMemo,
} from "react";

// inner-grid 반복 더미
// 회복시간 , 안정율 , 혈압 고정
const EndoRoom = ({ tempData, setTempData }) => {
  const [currentValue, setCurrentValue] = useState(tempData.map(() => 0));
  const [recoveryOut, setRecoveryOut] = useState(tempData.map(() => 0));
  const [selectedPatient, setSelectedPatient] = useState([]);
 

  // MQTT 셋팅 리팩토링 커스텀훅 제작
  const [message, move] = useMqtt();
  console.log(message)
  console.log(move)


  const totalDuration = 120; // 회복시간 120분 기준
  const intervalTime = 10; // 애니메이션 단계 (10분씩 증가)

  useEffect(() => {
    // map 으로 condition 데이터가 있는 값을 찾아서 배열 생성
    // [0,1,null,null,,,,] 모든 요소를 순회후 데이터 있는 값만 새로운 배열로 만든후
    // filter를 사용해 데이터가 있는 값만 필터링
    const emergency = tempData
      .map((item, index) => (item.condition ? index : null))
      .filter((index) => index !== null);
    setSelectedPatient(emergency);
  }, [tempData]);

  useLayoutEffect(() => {
    const intervals = tempData.map((item, index) => {
      const recoveryTime = item.recovery;
      const firstStageEnd = recoveryTime - intervalTime;
      const intervalDuration = (recoveryTime / totalDuration) * 6000; // * 10 * 60 * 1000 10분기준

      let currentStep = 0;

      const firstInterval = setInterval(() => {
        if (currentStep * intervalTime < firstStageEnd) {
          setCurrentValue((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = isNaN(newValues[index]) ? 0 : newValues[index];
            return newValues;
          });
          currentStep++;
        } else {
          clearInterval(firstInterval);
          const blinkInterval = setInterval(() => {
            setCurrentValue((prevValues) => {
              const newValues = [...prevValues];
              newValues[index] =
                prevValues[index] === firstStageEnd
                  ? recoveryTime
                  : firstStageEnd;
              return newValues;
            });
          }, 1000); // 깜빡이는 속도 (1초)

          setTimeout(
            () => {
              clearInterval(blinkInterval);
              setCurrentValue((prevValues) => {
                const newValues = [...prevValues];
                newValues[index] = recoveryTime; // 마지막 값을 고정
                return newValues;
              });
            },
            (intervalTime / 10) * 60 * 1000
          ); // 깜빡임 종료 시간 (예 : 10분)
        }
      }, intervalDuration);

      return firstInterval;
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [tempData, intervalTime, totalDuration]);

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
      }, 60000); // 1분 간격  // 시간타임 간격
    });

    return () => timeOut.forEach((interval) => clearInterval(interval));
  }, [tempData]);

  const handlePatientClick = useCallback(
    (i) => {
      setSelectedPatient((prev) => {
        if (prev[prev.length - 1] === i) return prev;
        return [...prev.filter((item) => item !== i), i];
      });
    },
    [setSelectedPatient]
  );

  const emergencyClick = useCallback(
    (index) => {
      setTempData((prevTempData) =>
        prevTempData.map((patient, i) => {
          if (i === index && patient.condition !== "") {
            return { ...patient, condition: "" };
          }
          return patient;
        })
      );
      setSelectedPatient((prev) => prev.filter((item) => item !== index));
    },
    [setTempData, setSelectedPatient]
  );

  const renderAlerts = useMemo(() => {
    return selectedPatient.map((patientIndex) => {
      const selectedItem = tempData[patientIndex];
      if (!selectedItem || !selectedItem.condition) return null;

      return (
        <Alert
          key={patientIndex}
          item={selectedItem}
          selectedPatient={selectedPatient}
          currentValue={currentValue[patientIndex]}
          totalDuration={totalDuration}
          recoveryOut={recoveryOut[patientIndex]}
          onConfirm={() => emergencyClick(patientIndex)}
        />
      );
    });
  }, [
    selectedPatient,
    tempData,
    currentValue,
    totalDuration,
    recoveryOut,
    emergencyClick,
  ]);

  // {`${Math.floor(Math.random() * 150) + 50}/${Math.floor(Math.random() * 100)}`} (그리드 텍스트 심박수 )

  return (
    <div className={styles.endoContainer}>
      <div className={styles.outerGrid}>
        {tempData.map((item, i) => {
          // Create a copy of the current item
          let currentItem = { ...item };

          // For the 0th and 1st items, update positionStatus and barStatus from mqttData
          if (i === 0) {
            currentItem.positionStatus = move.pose || null;
            currentItem.barStatus = move.rail;
            currentItem.ecgRate = message.heart;
            currentItem.breathRate = message.breath;
            currentItem.move = message.move;
          }

          const sitAstride = (positionStatus) => {
            if (
              currentItem.positionStatus === "po12_sitl" &&
              currentItem.barStatus === "01"
            ) {
              return "m30C";
            } else if (
              currentItem.positionStatus === "po13_sitr" &&
              currentItem.barStatus === "10"
            ) {
              return "m31d";
            } else {
              return poseData(positionStatus);
            }
          };

          let imgStyle;

          if (currentItem.positionStatus === "p01_null") {
            imgStyle = { display: "none" }; // positionStatus가 없을 때 이미지 숨기기
          } else if (item.positionStatus === "m30C") {
            imgStyle = { position: "absolute", width: "50px", top: "2%" };
          } else {
            imgStyle = { position: "absolute", width: "150px", height: "80px" };
          }

          return (
            <div
              className={`${styles.innerGrid} ${currentItem.condition ? styles.emergencyPatient : ""} ${
                currentItem.condition &&
                selectedPatient[selectedPatient.length - 1] === i
                  ? styles.emergencyFocuse
                  : ""
              }`}
              key={currentItem.patNumber}
              onClick={() => handlePatientClick(i)}
            >
              <div className={`${styles.innerGridImg}`}>
                <img
                  style={imgStyle}
                  src={`/images/Image/${i === 0 ? sitAstride(currentItem.positionStatus) : item.positionStatus}.${i === 1 && item.positionStatus === "m30C" ? "png" : "gif"}`}
                  alt=""
                />
                <img
                  style={{ height: "80%" }}
                  src={`/images/Back-img/bed/${i === 0 ? barData(currentItem.barStatus) : item.barStatus}.png`}
                  alt=""
                />
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
                <div
                  className={styles.innerGridText}
                  style={{
                    color:
                      recoveryOut[i] >= currentItem.recovery ? "red" : "white",
                  }}
                >
                  {/*`${recoveryOut[i]}M`*/ currentItem.move}
                </div>
                <div className={styles.innerGridText}>{`G${i + 5}`}</div>
              </div>
              <div
                className={styles.innerGridText}
                style={{ gridArea: "5/3/6/5" }}
              >
                {currentItem.ecgRate}
              </div>
              <div className={styles.innerGridText} style={{ color: "red" }}>
                {currentItem.breathRate}
              </div>
              <div className={styles.innerGridText}></div>
              <div
                className={styles.innerGridText}
                style={{ position: "relative", left: "20px" }}
              >
                <img src={HeartImg} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      {renderAlerts}
    </div>
  );
};

export default EndoRoom;
