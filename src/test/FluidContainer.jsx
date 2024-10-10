import React from 'react';
import FluidInfoContainer from './FluidInfoContainer';
import styles from './HospitalFloorTest.module.css';

const FluidContainer = ({ imgSrc, values }) => (
    <div className={styles.fluidcontainer}>
        <img className={styles.fluidstatusimgIcon} alt="" src={imgSrc} />
        <FluidInfoContainer values={values} />
    </div>
);

export default FluidContainer;
