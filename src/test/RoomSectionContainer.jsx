import React from 'react';
import styles from './HospitalFloorTest.module.css';
import BedsideContainer from './BedsideContainer';

const RoomSectionContainer = ({ sectionData }) => (
    <div className={styles[sectionData.sectionClass]}>
        {sectionData.beds.map((bed, index) => (
            <BedsideContainer key={index} bedData={bed} isLeft={sectionData.sectionClass.includes('left')} />
        ))}
    </div>
);

export default RoomSectionContainer;
