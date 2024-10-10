import styles from "./EndoRoom.module.css";
import Alert from "./Alert";
import mqtt from "mqtt";
import { useState, useLayoutEffect, useEffect, useCallback, useMemo } from "react";

// inner-grid 반복 더미
// 회복시간 , 안정율 , 혈압 고정
const EndoRoom = ({ tempData, setTempData }) => {
  const [currentValue, setCurrentValue] = useState(tempData.map(() => 0));
  const [recoveryOut, setRecoveryOut] = useState(tempData.map(() => 0));
  const [selectedPatient, setSelectedPatient] = useState([]);
  // 여러 환자 위급 상황이있을때 객체로 상태를 보관 방법 생각
  // const [emergency, setEmergency] = useState({
  //   NORMAL: false,
  //   LEVEL_1_EMERGENCY: tempData.condition,
  // });

  // MQTT 셋팅 리팩토링 커스텀훅 제작
  const [message, setMessage] = useState({});
  const [imgName, setImgName] = useState("defaultImage");
  const [barImg, setBarImg] = useState("undefined");

  useEffect(() => {
    // 데스크톱 ip
    // 포트번호
    const brokerUrl = "ws://192.168.0.17:9001";

    const options = {
      clean: true,
      // 수신 대기시간 조정 <
      connectTimeout: 3000,

      clientId: "mqtt_client_" + Math.random().toString(16).substr(2, 8),
    };

    const client = mqtt.connect(brokerUrl, options);

    client.on("connect", () => {
      //topic
      client.subscribe("more/test", (err) => {
        if (err) {
          console.error("err");
        }
      });
    });

    client.on("message", (topic, payload) => {
      const receivedMessage = payload.toString();
      const jsonMessage = JSON.parse(receivedMessage);

      setMessage(jsonMessage);
    });

    client.on("error", (err) => {
      console.error("Connection error", err);
      client.end();
    });

    return () => {
      if (client.connected) {
        client.end();
      }
    };
  }, []);

  const poseData = (pose) => {
    switch (pose) {
      case "p02_suhh":
        return "m10a";
      case "p08_rshh":
        return "m11a";
      case "p06_lshh":
        return "m12a";
      case "p04_buhh":
        return "m13a";
      case "p10_sith":
        return "m21s";
      case "p11_sitf":
        return "m22s";
      default:
        return "defaultImage";
      // defulet 추가
    }
  };
  const barData = (rail) => {
    switch (rail) {
      case "r01_rail(00)":
        return "00";
      case "r02_rail(10)":
        return "10";
      case "r03_rail(01)":
        return "01";
      case "r04_rail(11)":
        return "11";
      default:
        return "00";
      // defulet 추가
    }
  };
  useEffect(() => {
    const newImgName = poseData();
    const newBarImg = barData();

    setImgName(newImgName);
    setBarImg(newBarImg);
  }, [message]);

  console.log(message);

  // mqtt 끝

  const totalDuration = 120; // 회복시간 120분 기준
  const intervalTime = 10; // 애니메이션 단계 (10분씩 증가)

  useEffect(() => {
    // map 으로 condition 데이터가 있는 값을 찾아서 배열 생성
    // [0,1,null,null,,,,] 모든 요소를 순회후 데이터 있는 값만 새로운 배열로 만든후
    // filter를 사용해 데이터가 있는 값만 필터링
    const emergency = tempData.map((item, index) => (item.condition ? index : null)).filter((index) => index !== null);
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
              newValues[index] = prevValues[index] === firstStageEnd ? recoveryTime : firstStageEnd;
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
  }, [selectedPatient, tempData, currentValue, totalDuration, recoveryOut, emergencyClick]);

  // {`${Math.floor(Math.random() * 150) + 50}/${Math.floor(Math.random() * 100)}`} (그리드 텍스트 심박수 )

  return (
    <div className={styles.endoContainer}>
      <div className={styles.outerGrid}>
        {tempData.map((item, i) => {
          // Create a copy of the current item
          let currentItem = { ...item };

          // For the 0th and 1st items, update positionStatus and barStatus from mqttData
          if (i === 0) {
            currentItem.positionStatus = message.pose;
            currentItem.barStatus = message.rail;
          }
          console.log(currentItem);

          return (
            <div
              className={`${styles.innerGrid} ${currentItem.condition ? styles.emergencyPatient : ""} ${
                currentItem.condition && selectedPatient[selectedPatient.length - 1] === i ? styles.emergencyFocuse : ""
              }`}
              key={currentItem.patNumber}
              onClick={() => handlePatientClick(i)}
            >
              <div
                className={`${styles.innerGridImg}`}
                style={{
                  backgroundImage: `url(/images/Image/${i === 0 ? poseData(currentItem.positionStatus) : item.positionStatus}.gif)`,
                }}
              >
                <img src={`/images/Back-img/bed/${i === 0 ? barData(currentItem.barStatus) : item.barStatus}.png`} alt="" />
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
                    color: recoveryOut[i] >= currentItem.recovery ? "red" : "white",
                  }}
                >{`${recoveryOut[i]}M`}</div>
                <div className={styles.innerGridText}>{`G${i + 5}`}</div>
              </div>
              <div className={styles.innerGridText} style={{ gridArea: "5/3/6/5" }}>
                {currentItem.ecgRate}
              </div>
              <div className={styles.innerGridText} style={{ color: "dimgray" }}>
                {currentItem.breathRate}
              </div>
              <div className={styles.innerGridText}>93/82</div>
              <div className={styles.innerGridText}></div>
            </div>
          );
        })}
      </div>
      {renderAlerts}
    </div>
  );
};

export default EndoRoom;
