import "./RoomBox.css";
import Left from "./Left";
import Right from "./Right";
import Modal from "../Modal/Modal";
import { Selected } from "./../../App";
import { useContext, useState, useMemo } from "react";

// Room Number 필터링

const RoomBox = ({ leftData, rightData, data, room }) => {
  const { category } = useContext(Selected);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [viewType, setViewType] = useState("");

  const filterLeft = useMemo(() => {
    return category === "수액" ? leftData.filter((item) => item.fluid === "Yes") : leftData;
  }, [category, leftData]);

  const filterRight = useMemo(() => {
    return category === "수액" ? rightData.filter((item) => item.fluid === "Yes") : rightData;
  }, [category, rightData]);

  const handleRoomModal = () => {
    setViewType("room");
    setModalData({ left: filterLeft, right: filterRight });
    setModalOpen(true);
  };
  const handlePatientClick = (data,order) => {
    setViewType("patient"); // 개별환자
    setModalData({...data, order});
    setModalOpen(true);
  };

  return (
    <div className="room">
      <div className="left-column">
        {filterLeft.map((item) => (
          <Left key={`left-${item.NO}`} data={item} onClick={ handlePatientClick} />
        ))}
      </div>
      <div className="right-column">
        {filterRight.map((item) => (
          <Right key={`right-${item.NO}`} data={item} onClick={handlePatientClick} />
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
