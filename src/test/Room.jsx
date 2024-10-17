import React from 'react';
import BedSection from './BedSection';
import styles from './HospitalFloorTest.module.css';

const Room = ({ roomNumber }) => (
    <div className={styles.roomoverview1}>
        <div className={styles.roomsectioncontainer}>
            <BedSection isLeft={true} />
            <BedSection isLeft={false} />
        </div>
        <div className={styles.room5111Wrapper}>
            <b className={styles.fluidamount}>{roomNumber}</b>
        </div>
    </div>
);

export default Room;
