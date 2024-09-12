import styles from "./RoomContainer.module.css";
import RoomBox from "./RoomBox";
import Environment from "./Environment";
import { useContext, useState } from "react";
import { Health } from "./../../App";
import TabContent from "../Tabs/TabContent";

const RoomContainer = ({ roomAir, selects, menuTab, isTab, setTab }) => {
  const { data, roomData } = useContext(Health);
  const [isModalOpen, setModalOpen] = useState(false);

  const chunkedData = [];
  for (let i = 0; i < data.length; i += 6) {
    chunkedData.push(data.slice(i, i + 6));
  }
 

  return (
    <div className={styles.container} onClick={() => setTab(false)}>
      {isTab && (
        <div onClick={(e) => e.stopPropagation()}>
          <TabContent menuTab={menuTab} setTab={setTab} />
        </div>
      )}
     {roomAir ? (<Environment roomData={roomData}/>):(
       <div className={styles.roomContainer}>
       {chunkedData.map((group, index) => {
         const leftData = group.filter((item) => item.NO % 2 === 0);
         const rightData = group.filter((item) => item.NO % 2 !== 0);

         return (
           <div key={index} className={styles.roomBox}>
             <RoomBox
               roomData={roomData}
               roomAir={roomAir} // roomAir 상태 전달
               selects={selects}
               leftData={leftData}
               rightData={rightData}
               data={data}
               room={index}
               isModalOpen={isModalOpen}
               setModalOpen={setModalOpen}
             />
           </div>
         );
       })}
     </div>
     )}
     
    </div>
  );
};

export default RoomContainer;
