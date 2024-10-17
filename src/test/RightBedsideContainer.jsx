import React from 'react';
import styles from './HospitalFloorTest.module.css';
import PatientContainer from './PatientContainer';
import TherapyOrderContainer from './TherapyOrderContainer';

const RightBedsideContainer = ({ bedData }) => (
    <div className={styles[bedData.containerClass]}>
        <TherapyOrderContainer />
        <PatientContainer fluids={bedData.fluids} />
    </div>
);

export default RightBedsideContainer;
