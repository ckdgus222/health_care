import React from 'react';
import styles from './HospitalFloorTest.module.css';
import PatientContainer from './PatientContainer';
import TherapyOrderContainer from './TherapyOrderContainer';

const LeftBedsideContainer = ({ bedData }) => (
    <div className={styles[bedData.containerClass]}>
        <PatientContainer fluids={bedData.fluids} />
        <TherapyOrderContainer />
    </div>
);

export default LeftBedsideContainer;
