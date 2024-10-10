import React from 'react';
import styles from './BedView.module.css';

const BedView = ({ fluidData, vitalSigns, therapyOrder }) => {
    return (
        <div className={styles.bedsideContainer}>
            <div className={styles.patientContainer}>
                <div className={styles.bedViewContainer}>
                    <div className={styles.bedView}>
                        <div className={styles.bedImageWrapper}>
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d12da0a7c2744365b66fc9bd25e51516a7c89f89c4243a4e40b8d6354430c991?placeholderIfAbsent=true&apiKey=7166793c975948ad9dfe5aaad9332717" alt="" className={styles.bedBackground} />
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ece25d7d6ef8db1f14ee14624c09ca669fb22a6e5e015792d18f6a79af24607f?placeholderIfAbsent=true&apiKey=7166793c975948ad9dfe5aaad9332717" alt="Patient bed view" className={styles.bedForeground} />
                        </div>
                    </div>
                </div>
                <div className={styles.monitoringDataContainer}>
                    <div className={styles.fluidContainer}>
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4856f73b42ae1be7f1ae3a787f8d2ca286f4a82d7f944ad6bc1dfebbbc21040?placeholderIfAbsent=true&apiKey=7166793c975948ad9dfe5aaad9332717" alt="" className={styles.fluidIcon} />
                        <div className={styles.fluidInfoContainer}>
                            <span>{fluidData.percentage}</span>
                            <span>{fluidData.time}</span>
                        </div>
                    </div>
                    <div className={styles.heartContainer}>
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/062b752c29e03fad418cdd97dde49a2659b37eb1b0c708631f83bda0bc8d13aa?placeholderIfAbsent=true&apiKey=7166793c975948ad9dfe5aaad9332717" alt="" className={styles.heartIcon} />
                        <div className={styles.vitalSignsContainer}>
                            <span>{vitalSigns.ecg}</span>
                            <span>{vitalSigns.respiration}</span>
                        </div>
                    </div>
                </div>
            </div>
            {therapyOrder && (
                <div className={styles.therapyOrderContainer}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecd70a4ccb1a6ea9d6e78ff795e1a52114223167e45bafafe5ce0c9f540da1b4?placeholderIfAbsent=true&apiKey=7166793c975948ad9dfe5aaad9332717" alt="Therapy order" className={styles.therapyOrderIcon} />
                </div>
            )}
        </div>
    );
};

export default BedView;
