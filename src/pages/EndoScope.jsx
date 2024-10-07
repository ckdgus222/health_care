import styles from "./EndoScope.module.css";
import { useEffect, useState } from "react";
import mqtt from "mqtt";

const EndoScope = () => {
  const [message, setMessage] = useState({});
  const [imgName, setImgName] = useState("defaultImage");
  const [barImg, setBarImg] = useState("undefined")


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

    client.on("message", (topic,payload)=>{
      const receivedMessage = payload.toString();
      const jsonMessage = JSON.parse(receivedMessage)
      
      setMessage(jsonMessage)
    });

    client.on('error', (err)=>{
      console.error("Connection error", err);
      client.end()
    });

    return ()=> {
      if(client.connected){
         client.end();
      }
    };
  },[]);
  
  // 함수 조건 처리 변경
  
  const poseData = ()=>{
    switch(message?.pose){
      case "p02_suhh":
         return "m10a"
      case "p08_rshh":
         return "m11a"
      case "p06_lshh":
         return  "m12a"
      case "p04_buhh":
         return "m13a"
      case "p10_sith":
         return "m21s"
      case "p11_sitf":
         return "m22s" ;
      default:
      return "defaultImage";      
      // defulet 추가
    }
  }
  const barData = ()=>{
   switch(message?.rail){
     case "r01_rail(00)":
        return "00"
     case "r01_rail(10)":
        return "10"
     case "r01_rail(11)":
        return  "11"
     case "p01_rail(01)":
        return "r01_rail(01)"
     default:
     return "defaultImage";      
     // defulet 추가
   }
 }

  useEffect(() => {
   const newImgName = poseData();
   const newBarImg = barData();

   setImgName(newImgName);
   setBarImg(newBarImg);
 }, [message]);

 
 const imgUrl = `./../../public/images/Image/${imgName}.gif`;
 

  //bed 이미지 json
  return (
    <div className={styles.scopeBox}>
      <div>{message ? message.pose : null}</div>
      <div className={styles.endoBed}  style={{ backgroundImage: `url(${imgUrl})`}}>
        <img className={styles.innerBed} src={`/images/Back-img/bed/${barImg}.png`} alt="endo" />
      </div>
    </div>
  );
};

export default EndoScope;
