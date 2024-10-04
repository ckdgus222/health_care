import styles from "./EndoScope.module.css";
import { useEffect, useState } from "react";
import mqtt from "mqtt";

const EndoScope = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
   // 데스크톱 ip
   // 포트번호
    const brokerUrl = "";

    const options = {
      clean: true,
      connectTimeout: 4000,

      clientId: "react_mqtt_client_" + Math.random().toString(16).substr(2, 8),
    };

    const client = mqtt.connect(brokerUrl, options);

    client.on("connect", () => {
      console.log("MQTT");

      client.subscribe("ai/data", (err) => {
        if (err) {
          console.error("err");
        }
      });
    });

    client.on("message", (topic,payload)=>{
      const receivedMessage = payload.toString();
      console.log(`${receivedMessage}`)
      setMessage(receivedMessage)
    });

    client.on('error', (err)=>{
      console.error("Connection error", err);
      client.end()
    });

    return ()=>{
      if(client.connected){
         client.end();
      }
    };
  },[]);

  //bed 이미지 json
  return (
    <div className={styles.scopeBox}>
      <div>{message}</div>
      <div className={styles.endoBed}>
        <img className={styles.innerBed} src={`/images/Back-img/bed/00.png`} alt="endo" />
      </div>
    </div>
  );
};

export default EndoScope;
