import styles from "./Enm.module.css";
import EndoRoom from "../components/Eum/EndoRoom";
import TableBox from "../components/Eum/TableBox";
import FooterContainer from "../components/Eum/FooterCotainer";
import Preferences from "../components/Eum/Preferences.jsx";
import { Health } from "../../App.jsx";
import { useContext, useEffect } from "react";
import { useState } from "react";


const Eum = () => {
  const { data } = useContext(Health);
  const [tempData, setTempData] = useState(data);
  const [modalOn,setModalOn] = useState(false)

  //엔드포인트 커스텀처리
  const [ward, setWard] = useState();
  const [device, setDevice] = useState();

  useEffect(() => {
    const fetchs = async () => {
      try {
        const response = await fetch("http://192.168.0.31:8000/ward/"); // 프록시 설정을 사용하여 Django 서버로 요청

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const list = await response.json();
        setWard(list);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchs();
  }, []);

  useEffect(() => {
    const fetchs = async () => {
      try {
        const response = await fetch("http://192.168.0.31:8000/device/"); // 프록시 설정을 사용하여 Django 서버로 요청

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const list = await response.json();
        setDevice(list);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchs();
  }, []);


  // Eum Box 데이터 < slice 사용 x
  const tempDataSlice = tempData.slice(0, 15);
  //data.slice(0,10)

  return (
    <>
      <div className={styles.eumContainer}>
        {modalOn && <Preferences setModalOn={setModalOn}/>}
        <EndoRoom tempData={tempDataSlice} setTempData={setTempData} />
        <TableBox tempData={tempDataSlice} setModalOn={setModalOn}/>
        <FooterContainer />
      </div>
    </>
  );
};

export default Eum;
