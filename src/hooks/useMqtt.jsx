import mqtt from "mqtt";
import {useState, useEffect} from "react";
import { poseData,barData } from "../util/mqttData";

const useMqtt = () =>{
      // MQTT 셋팅 리팩토링 커스텀훅 제작
  const [message, setMessage] = useState({});
  const [move, setMove] = useState({});
  
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
      client.subscribe(["moreiot","more/test"], (err) => {
        if (err) {
          console.error("err");
        }
      });
    });

    client.on("message", (topic, payload) => {
      const receivedMessage = payload.toString();
      const jsonMessage = JSON.parse(receivedMessage);
      
      if(topic === "more/test"){
        setMessage(jsonMessage);     
      }else if(topic === "moreiot"){
        setMove(jsonMessage)
      }
      
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


 

  useEffect(() => {
    const newImgName = poseData();
    const newBarImg = barData();

    setImgName(newImgName);
    setBarImg(newBarImg);
  }, [message,move]);

  
  return [message,move]

}

export default useMqtt