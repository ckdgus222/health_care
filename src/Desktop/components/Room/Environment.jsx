import styles from "./Environment.module.css";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";
import "chart.js/auto";

const Environment = ({ roomData }) => {
  // 여러 개의 방을 처리할 수 있도록 각 방의 차트 데이터를 저장하는 상태
  const [chartDataList, setChartDataList] = useState([]);

  useEffect(() => {
    const generateChartData = (data) => {
      return data.map(({ status, value }) => {
        let backgroundColor = "";

        switch (status) {
          case "good":
            backgroundColor = "green";
            break;
          case "normal":
            backgroundColor = "yellow";
            break;
          case "bad":
            backgroundColor = "red";
            break;
          default:
            backgroundColor = "gray";
        }

        return {
          datasets: [
            {
              data: [value, 100 - value],
              backgroundColor: [backgroundColor, "#e0e0e0"],
              hoverBackgroundColor: [backgroundColor, "#e0e0e0"],
            },
          ],
        };
      });
    };

    if (roomData && roomData.length > 0) {
      const chartData = generateChartData(roomData);
      setChartDataList(chartData);
    }
  }, [roomData]);

  if (!chartDataList.length) return null; // 차트 데이터가 없을 경우 렌더링하지 않음

  return (
    <div className={styles.environmentContainer}>
      {roomData.map((room, index) => (
        <div key={room.room} className={styles.donutContainer}>
          <div className={styles.donutContent}>
            <Doughnut
              data={chartDataList[index]}
              width={250}
              height={250}
              options={{
                cutout: "70%",
                radius: "80%",
                animation: {
                  animateScale: true,
                  animateRotate: true,
                },
              }}
            />
          </div>
          <div className={styles.observation}>
            {Array.from({ length : 3}).map((_, arrIndex) => (
                <div className={styles.observationItem} key={arrIndex}>
                  <Doughnut
                    data={chartDataList[arrIndex]}
                    width={100}
                    height={100}
                    options={{
                      cutout: "70%",
                      radius: "80%",
                      animation: {
                        animateScale: true,
                        animateRotate: true,
                      },
                    }}
                  />
                </div>
            ))}
          </div>
          <div className={styles.roomNumber}>Room {room.room}</div> {/* 방 번호 표시 */}
        </div>
      ))}
    </div>
  );
};
export default Environment;
