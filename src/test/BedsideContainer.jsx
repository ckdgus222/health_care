import React from 'react';
import styles from './HospitalFloorTest.module.css';
import PatientContainer from './PatientContainer';
import TherapyOrderContainer from './TherapyOrderContainer';

const BedsideContainer = ({ bedData, isLeft }) => (
    <div className={styles[bedData.containerClass]}>
        {isLeft ? (
            <>
                <PatientContainer fluids={bedData.fluids} />
                <TherapyOrderContainer />
            </>
        ) : (
            <>
                <TherapyOrderContainer />
                <PatientContainer fluids={bedData.fluids} />
            </>
        )}
    </div>
);

export default BedsideContainer;
