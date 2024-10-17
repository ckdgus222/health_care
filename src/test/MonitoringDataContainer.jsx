import React from 'react';
import FluidContainer from './FluidContainer';
import styles from './HospitalFloorTest.module.css';

const MonitoringDataContainer = ({ fluids }) => (
    <div className={styles.monitoringdatacontainer}>
        {fluids.map((fluid, index) => (
            <FluidContainer key={index} imgSrc={fluid.imgSrc} values={fluid.values} />
        ))}
    </div>
);

export default MonitoringDataContainer;
