import React from 'react';
import styles from './RoomOverview.module.css';
import BedView from './BedView';

const RoomOverview = ({ roomId, patientCount }) => {
    const beds = Array(patientCount).fill().map((_, index) => ({
        id: index + 1,
        fluidData: { percentage: '5%', time: '3M' },
        vitalSigns: { ecg: '5%', respiration: '5%' },
        therapyOrder: true
    }));

    return (
        <article className={styles.roomOverview}>
            <div className={styles.roomSectionContainer}>
                <div className={styles.leftRoomSection}>
                    {beds.slice(0, 3).map(bed => (
                        <BedView key={bed.id} {...bed} />
                    ))}
                </div>
                <div className={styles.rightRoomSection}>
                    {beds.slice(3).map(bed => (
                        <BedView key={bed.id} {...bed} />
                    ))}
                </div>
            </div>
            <h2 className={styles.roomNumber}>Room {roomId}</h2>
        </article>
    );
};

export default RoomOverview;
