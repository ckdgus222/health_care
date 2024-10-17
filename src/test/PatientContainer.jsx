import React from 'react';
import BedView from './BedView';
import MonitoringDataContainer from './MonitoringDataContainer.jsx';
import styles from './HospitalFloorTest.module.css';

const PatientContainer = ({ fluids }) => (
    <div className={styles.patientcontainer}>
        <div className={styles.bedviewcontainer}>
            <BedView />
        </div>
        <MonitoringDataContainer fluids={fluids} />
    </div>
);

export default PatientContainer;
