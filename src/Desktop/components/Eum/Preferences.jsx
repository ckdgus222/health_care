
import styles from "./Preferences.module.css";
import RadarData from "./../../../Radar.json";
import BedData from "./../../../Bed.json";
import { useState } from "react";

const Preferences = ({ setModalOn }) => {
  const close = () => {
    setModalOn((prev) => !prev);
  };


  const [bedList, setBedList] = useState(BedData);
  const [radarList, setRadarList] = useState(RadarData);

  const [selectedBed, setSelectedBed] = useState(null);
  const [selectedRadar, setSelectedRadar] = useState(null);

  const [mapping, setMapping] = useState([]);

  //  환경설정 침대 레이더 맵핑 함수
  const handleBedMatching = (Number) => {
    setBedList((prev) => {
      let newBedList = [...prev];

      if (selectedBed) {
        newBedList.splice(selectedBed.originalIndex, 0, selectedBed);
      }

      const newSelectedBed = newBedList.find((item) => item.bedNumber === Number.bedNumber);
      newBedList = newBedList.filter((item) => item.bedNumber !== Number.bedNumber);
      setSelectedBed(newSelectedBed);
      return newBedList;
    });
  };

  const handleRadarMatching = (Number) => {
    setRadarList((prev) => {
      let newRadarList = [...prev];

      if (selectedRadar) {
        newRadarList.splice(selectedRadar.originalIndex, 0, selectedRadar);
      }

      const newSelectedRadar = newRadarList.find((item) => item.radarNumber === Number.radarNumber);

      newRadarList = newRadarList.filter((item) => item.radarNumber !== Number.radarNumber);
      setSelectedRadar(newSelectedRadar);
      return newRadarList;
    });
  };

  const dataMappings = ()=>{
    setMapping((prev) =>{
      if (selectedBed && selectedRadar) {
        // 기존 매핑에 선택된 Bed와 Radar를 추가
        const mappingCollection = [...prev, { bed: selectedBed.bedNumber ,bedIndex: selectedBed.originalIndex, radar: selectedRadar.radarNumber, radarIndex: selectedRadar.originalIndex }];
        return mappingCollection;
      }
      return prev; // 둘 중 하나라도 없으면 이전 상태 유지
  
    })
    setSelectedBed(null)
    setSelectedRadar(null)
  }
  const deleteMapping = (item)=>{
    //{bed: 105, bedIndex: 4, radar: 106, radarIndex: 5}
    if(mapping.length > 0){
      setBedList((prev)=>{
        const deleteBed = [...prev]
        deleteBed.splice(item.bedIndex, 0 , {bedNumber:item.bed, originalIndex:item.bedIndex})
        return deleteBed
      })
      setRadarList((prev)=>{
        const deleteRadar = [...prev]
        deleteRadar.splice(item.radarIndex, 0 ,{radarNumber:item.radar, originalIndex:item.radarIndex})
        return deleteRadar
      })
      
      setMapping((prev) => {
        return prev.filter((mappingItem)=> mappingItem.bed !== item.bed || mappingItem.radar !== item.radar)
      })
      }
      return null
    
  }
 

  return (
    <div className={styles.overlay} onClick={close}>
      <div className={styles.mainBox} onClick={(e) => e.stopPropagation()}>
        <div className={styles.navBox}>
          <div
            className={styles.navTitle}
            onClick={() => toggleMenu('patient')}
          >
            <span>환경설정</span>
          </div>
          <div className={styles.navContent}>
            <div className={styles.matchingBox}>
              <div className={styles.bedBox}>
                <ul>
                  {bedList.map((item) => (
                    <li
                      key={item.originalIndex}
                      onClick={() => handleBedMatching(item)}
                    >
                      bedNumber {item.bedNumber}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.mappingBox}>
                <div
                  className={styles.bed}
                  onClick={() =>
                    selectedBed && handleBedMatching(selectedBed)
                  }
                >
                  {selectedBed ? ` ${selectedBed.bedNumber}` : ''}
                </div>
                <div
                  className={styles.radar}
                  onClick={() =>
                    selectedRadar && handleRadarMatching(selectedRadar)
                  }
                >
                  {selectedRadar ? ` ${selectedRadar.radarNumber}` : ''}
                </div>
                <button onClick={dataMappings}>저장</button>
              </div>
              <div className={styles.radarBox}>
                <ul>
                  {radarList.map((item) => (
                    <li
                      key={item.originalIndex}
                      onClick={() => handleRadarMatching(item)}
                    >
                      radarNumber {item.radarNumber}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.dataMatching}>
              {mapping.map((item, i) => (
                <div
                  className={styles.matching}
                  key={i}
                  onClick={() => deleteMapping(item)}
                >
                  {`bedNumber ${item.bed} === radarNumber ${item.radar}`}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
