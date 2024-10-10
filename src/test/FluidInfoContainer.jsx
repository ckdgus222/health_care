import React from 'react';
import styles from './HospitalFloorTest.module.css';

const FluidInfoContainer = ({ values }) => (
    <div className={styles.fluidinfocontainer}>
        {values.map((value, index) => (
            <b key={index} className={styles.b}>{value}</b>
        ))}
    </div>
);

export default FluidInfoContainer;
