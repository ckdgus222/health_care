import React from 'react';
import styles from './HospitalFloorTest.module.css';

const Bed = ({ isLeft }) => (
    <div className={isLeft ? styles.leftbedsidecontainer2 : styles.leftbedsidecontainer2}>
        {isLeft && (
            <div className={styles.patientcontainer}>
                <div className={styles.bedviewcontainer}>
                    <div className={styles.bedview}>
                        <img className={styles.image4Icon} alt="" src="image 4.png" />
                        <img className={styles.icon} alt="" src="00 1.png" />
                    </div>
                </div>
                <div className={styles.monitoringdatacontainer}>
                    <div className={styles.fluidcontainer}>
                        <img className={styles.fluidstatusimgIcon} alt="" src="FluidStatusImg.png" />
                        <div className={styles.fluidinfocontainer}>
                            <b className={styles.fluidamount}>5%</b>
                            <b className={styles.fluidamount}>3M</b>
                        </div>
                    </div>
                    <div className={styles.fluidcontainer}>
                        <img className={styles.fluidstatusimgIcon} alt="" src="image 6.png" />
                        <div className={styles.fluidinfocontainer}>
                            <b className={styles.fluidamount}>5%</b>
                            <b className={styles.fluidamount}>5%</b>
                        </div>
                    </div>
                </div>
            </div>
        )}
        <div className={styles.therapyordercontainer}>
            <img className={styles.oxyzenmaskIcon} alt="" src="OxyzenMask.png" />
        </div>
        {!isLeft && (
            <div className={styles.patientcontainer}>
                <div className={styles.bedviewcontainer}>
                    <img className={styles.bedviewIcon} alt="" src="BedView.png" />
                </div>
                <div className={styles.monitoringdatacontainer}>
                    <div className={styles.fluidcontainer}>
                        <img className={styles.fluidstatusimgIcon} alt="" src="FluidStatusImg.png" />
                        <div className={styles.fluidinfocontainer}>
                            <b className={styles.fluidamount}>5%</b>
                            <b className={styles.fluidamount}>3M</b>
                        </div>
                    </div>
                    <div className={styles.fluidcontainer}>
                        <img className={styles.fluidstatusimgIcon} alt="" src="image 6.png" />
                        <div className={styles.fluidinfocontainer}>
                            <b className={styles.fluidamount}>5%</b>
                            <b className={styles.fluidamount}>5%</b>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
);

export default Bed;
