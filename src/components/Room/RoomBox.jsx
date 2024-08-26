import "./RoomBox.css";
import Left from "./Left";
import Right from "./Right";
import Modal from "../Modal/Modal";
import { Selected } from "./../../App";
import Select from "./Select";
import { useContext, useState, useMemo } from "react";

// Room Number 필터링

const RoomBox = ({ leftData, rightData, data, room,selects }) => {
  const { category } = useContext(Selected);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [viewType, setViewType] = useState("");
  const [activePatient, setActivePatient] = useState(null);


  // return category === "수액" ? leftData.filter((item) => item.fluid === "Yes") : leftData;
  const filterLeft = useMemo(() => {
    switch(category){
      case "난간":
      return leftData.filter((item) => item.barStatus !== "11")
      case "수액G":
      return leftData.filter((item) => item.fluid_G)
      case "수액A":
      return leftData.filter((item) => item.fluid_A)
      case "수액C":
      return leftData.filter((item) => item.fluid_C)
      default:
        return leftData;
    }
  }, [category, leftData]);
  console.log(filterLeft)
     
  const filterRight = useMemo(() => {
    switch(category){
      case "난간":
      return leftData.filter((item) => item.barStatus !== "11")
      case "수액G":
      return leftData.filter((item) => item.fluid_G)
      case "수액A":
      return leftData.filter((item) => item.fluid_A)
      case "수액C":
      return leftData.filter((item) => item.fluid_C)
      default:
        return leftData;
    }
  }, [category, rightData]);

  const handleRoomModal = () => {
    setViewType("room");
    setModalData({ left: filterLeft, right: filterRight });
    setModalOpen(true);
  };
  // const handleSingleClick = (item) => {
  //   setActivePatient((prevState) => (prevState && prevState.NO === item.NO ? null : item));
  // };

  // const handleDoubleClick = (item) => {
  //   setViewType("patient");
  //   setModalData(item);
  //   setModalOpen(true);
  // };

  const handlePatientClick = (data, order) => {
    setViewType("patient"); // 개별환자
    setModalData({ ...data, order });
    setModalOpen(true);
  };


  return (
    <div className="room">
      <div className="left-column">
        {filterLeft.map((item) => (
          <div key={`left-container-${item.NO}`} className="left-container">
            {selects ? <Select data={item}/> : null}
            <Left key={`left-${item.NO}`} data={item} onClick={handlePatientClick} isModalOpen={isModalOpen}/>
          </div>
        ))}
      </div>
      <div className="right-column">
        {filterRight.map((item) => (
          <div key={`right-container-${item.NO}`} className="right-container">
            {selects ? <Select data={item} /> : null}
            <Right key={`right-${item.NO}`} data={item} onClick={handlePatientClick} isModalOpen={isModalOpen}/>
          </div>
        ))}
      </div>
      <div className="room_number" onClick={handleRoomModal}>
        Room 511{room + 1}
      </div>
      {isModalOpen && (
        <Modal
          data={modalData}
          viewType={viewType}
          onClose={() => {
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default RoomBox;
