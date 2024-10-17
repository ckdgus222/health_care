import React from 'react';
import styles from './HospitalFloorTest.module.css';
import LeftRoomSection from './LeftRoomSection';
import RightRoomSection from './RightRoomSection';

const RoomOverview = ({ roomData }) => {
    const leftSection = roomData.sections.find(
        (section) => section.sectionClass === 'leftroomsectioncontainer'
    );
    const rightSection = roomData.sections.find(
        (section) => section.sectionClass === 'rightroomsectioncontainer'
    );

    return (
        <div className={styles.roomoverview1}>
            <div className={styles.roomsectioncontainer}>
                <LeftRoomSection beds={leftSection.beds} />
                <RightRoomSection beds={rightSection.beds} />
            </div>
            <div className={styles.room5111Wrapper}>
                <b className={styles.b}>{roomData.roomNumber}</b>
            </div>
        </div>
    );
};

export default RoomOverview;
