import React from 'react';
import styles from './HospitalFloorTest.module.css';
import LeftBedsideContainer from './LeftBedsideContainer';

const LeftRoomSection = ({ beds }) => (
    <div className={styles.leftroomsectioncontainer}>
        {beds.map((bed, index) => (
            <LeftBedsideContainer key={index} bedData={bed} />
        ))}
    </div>
);

export default LeftRoomSection;
