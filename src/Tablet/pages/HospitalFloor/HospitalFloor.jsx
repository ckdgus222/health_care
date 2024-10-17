import React from 'react';
import styles from './HospitalFloor.module.css';
import Header from './Header';
import RoomOverview from './RoomOverview';
import Footer from './Footer';

const HospitalFloor = () => {
    const rooms = [
        { id: 5111, patients: 6 },
        { id: 5112, patients: 6 },
        { id: 5113, patients: 6 },
        { id: 5114, patients: 6 },
        { id: 5115, patients: 6 },
        { id: 5116, patients: 6 },
        { id: 5117, patients: 6 },
        { id: 5118, patients: 6 }
    ];

    return (
        <div className={styles.roomMain}>
            <Header />
            <main className={styles.content}>
                <section className={styles.hospitalFloor}>
                    {rooms.map(room => (
                        <RoomOverview key={room.id} roomId={room.id} patientCount={room.patients} />
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HospitalFloor;
