import React, { useEffect, useState } from 'react';
import styles from './HospitalFloorTest.module.css';
import Header from './Header';
import RoomOverview from './RoomOverview';

const HospitalFloorTest = () => {
    const [roomData, setRoomData] = useState([]);

    useEffect(() => {
        // 데이터를 설정합니다.
        const data = [];

        for (let i = 1; i <= 8; i++) {
            data.push({
                roomNumber: `Room 511${i}`,
                sections: [
                    {
                        sectionClass: 'leftroomsectioncontainer',
                        beds: [
                            {
                                containerClass: 'leftbedsidecontainer1',
                                fluids: [
                                    {
                                        imgSrc: 'images/test/hospitalfloor/FluidStatusImg.png',
                                        values: ['5%', '3M'],
                                    },
                                    {
                                        imgSrc: 'images/test/hospitalfloor/image 6.png',
                                        values: ['5%', '5%'],
                                    },
                                ],
                            },
                            {
                                containerClass: 'leftbedsidecontainer2',
                                fluids: [
                                    {
                                        imgSrc: 'images/test/hospitalfloor/FluidStatusImg.png',
                                        values: ['10%', '2L'],
                                    },
                                    {
                                        imgSrc: 'images/test/hospitalfloor/image 6.png',
                                        values: ['8%', '4%'],
                                    },
                                ],
                            },
                            {
                                containerClass: 'leftbedsidecontainer2',
                                fluids: [
                                    {
                                        imgSrc: 'images/test/hospitalfloor/FluidStatusImg.png',
                                        values: ['7%', '1.5L'],
                                    },
                                    {
                                        imgSrc: 'images/test/hospitalfloor/image 6.png',
                                        values: ['6%', '3%'],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        sectionClass: 'rightroomsectioncontainer',
                        beds: [
                            {
                                containerClass: 'rightbedsidecontainer1',
                                fluids: [
                                    {
                                        imgSrc: 'images/test/hospitalfloor/FluidStatusImg.png',
                                        values: ['4%', '2.5M'],
                                    },
                                    {
                                        imgSrc: 'images/test/hospitalfloor/image 6.png',
                                        values: ['3%', '4%'],
                                    },
                                ],
                            },
                            {
                                containerClass: 'rightbedsidecontainer2',
                                fluids: [
                                    {
                                        imgSrc: 'images/test/hospitalfloor/FluidStatusImg.png',
                                        values: ['9%', '2M'],
                                    },
                                    {
                                        imgSrc: 'images/test/hospitalfloor/image 6.png',
                                        values: ['7%', '6%'],
                                    },
                                ],
                            },
                            {
                                containerClass: 'rightbedsidecontainer2',
                                fluids: [
                                    {
                                        imgSrc: 'images/test/hospitalfloor/FluidStatusImg.png',
                                        values: ['6%', '1M'],
                                    },
                                    {
                                        imgSrc: 'images/test/hospitalfloor/image 6.png',
                                        values: ['5%', '4%'],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        }

        setRoomData(data);
    }, []);

    return (
        <div className={styles.hospitalfloortest}>
            <Header />
            <div className={styles.content}>
                <div className={styles.hospitalfloor}>
                    {roomData.map((room, index) => (
                        <RoomOverview key={index} roomData={room} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HospitalFloorTest;
