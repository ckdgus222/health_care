import React from 'react';
import styles from './HospitalFloorTest.module.css';
import RightBedsideContainer from './RightBedsideContainer';

const RightRoomSection = ({ beds }) => (
    <div className={styles.rightroomsectioncontainer}>
        {beds.map((bed, index) => (
            <RightBedsideContainer key={index} bedData={bed} />
        ))}
    </div>
);

export default RightRoomSection;
