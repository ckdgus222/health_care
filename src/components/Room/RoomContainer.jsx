import "./RoomContainer.css";
import RoomBox from "./RoomBox";
import { useContext, useState } from "react";
import { Health } from "./../../App";
import TabContent from "../Tabs/TabContent";

const RoomContainer = ({ menuTab, isTab, setTab }) => {
  const { data } = useContext(Health);

  const chunkedData = [];
  for (let i = 0; i < data.length; i += 6) {
    chunkedData.push(data.slice(i, i + 6));
  }
  
 
  return (
    <div className="container" onClick={()=> setTab(false)}>
      {isTab && (
        <div onClick={(e) => e.stopPropagation()}>
          <TabContent menuTab={menuTab} />
        </div>
      )}
      <div className="roomContainer">
        {chunkedData.map((group, index) => {
          const leftData = group.filter((item) => item.NO % 2 === 0);
          const rightData = group.filter((item) => item.NO % 2 !== 0);
          return <RoomBox key={index} leftData={leftData} rightData={rightData} data={data} room={index} />;
        })}
      </div>
    </div>
  );
};

export default RoomContainer;
