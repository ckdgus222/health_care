import styles from "./RoomBox.module.css";
import Left from "./Left";
import Right from "./Right";
import Modal from "../Modal/Modal";
import Environment from "./Environment";
import { Selected } from "./../../App";
import Select from "./Select";
import { menuFilter } from "../../util/filter_menu";
import { useContext, useState, useMemo } from "react";

// Room Number 필터링

const RoomBox = ({ roomData,leftData, rightData, roomAir, data, room, selects, width, isModalOpen, setModalOpen }) => {
  const { category } = useContext(Selected);
  const [modalData, setModalData] = useState(null);
  const [viewType, setViewType] = useState("");

  // return category === "수액" ? leftData.filter((item) => item.fluid === "Yes") : leftData;
  const filterLeft = useMemo(() => {
    return menuFilter(leftData, category) || [];
  }, [category, leftData]);

  const filterRight = useMemo(() => {
    return menuFilter(rightData, category) || [];
  }, [category, rightData]);

  // const closeModal = () => {
  //   setModalOpen(false);
  //   setRoomModalOpen(false);
  // };

  const handleRoomModal = () => {
    setViewType("room");
    setModalData({ left: filterLeft, right: filterRight });
    setModalOpen((prev) => true);
  };

  const handlePatientClick = (data, order) => {
    // Room 모달이 열려 있지 않을때 실행
    setViewType("patient"); // 개별환자
    setModalData({ ...data, order });
    setModalOpen(true);
  };
 
 
  return (
    <>
        <div className={styles.room} style={{ width: width }}>
          <div className={styles.leftColumn}>
            {filterLeft.map((item) => (
              <div key={`left-container-${item.NO}`} className={styles.leftContainer}>
                {selects ? <Select data={item} /> : null}
                <Left
                  key={`left-${item.NO}`}
                  data={item}
                  onClick={() => handlePatientClick(item)}
                  isModalOpen={isModalOpen}
                />
              </div>
            ))}
          </div>
          <div className={styles.rightColumn}>
            {filterRight.map((item) => (
              <div key={`right-container-${item.NO}`} className={styles.rightContainer}>
                {selects ? <Select margin={"marginReft"} data={item} /> : null}
                <Right
                  key={`right-${item.NO}`}
                  data={item}
                  onClick={() => handlePatientClick(item)}
                  isModalOpen={isModalOpen}
                />
              </div>
            ))}
          </div>
          <div className={styles.roomNumber} onClick={handleRoomModal}>
            Room {leftData[0].roomNumber}
          </div>
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
    </>
  );
};

export default RoomBox;
