import React from 'react';
import Bed from './Bed';
import styles from './HospitalFloorTest.module.css';

const BedSection = ({ isLeft }) => (
    <div className={styles.leftroomsectioncontainer}>
        <Bed isLeft={isLeft} />
        <Bed isLeft={isLeft} />
        <Bed isLeft={isLeft} />
    </div>
);

export default BedSection;
