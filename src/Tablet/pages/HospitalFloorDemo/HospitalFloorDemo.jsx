import React from 'react';
import styles from './HospitalFloorDemo.module.css';

const dummyData = {
    hospitalName: 'EUM:care',
    floorNumber: '0511',
    userInfo: '홍간호님 로그인 중',
    roomCount: 8,
    bedCount: 48,
    patientCount: 42,
    absentCount: 6,
    rooms: [
        { number: '5111', beds: 6 },
        { number: '5112', beds: 6 },
        { number: '5113', beds: 6 },
        { number: '5114', beds: 6 },
        { number: '5115', beds: 6 },
        { number: '5116', beds: 6 },
        { number: '5117', beds: 6 },
        { number: '5118', beds: 6 },
    ],
};

const HospitalFloorDemo = () => {
    return (
        <main className={styles.floorMain}>
            <Header />
            <section className={styles.content}>
                <div className={styles.hospitalFloor}>
                    {dummyData.rooms.map((room) => (
                        <RoomOverview key={room.number} roomNumber={room.number} bedCount={room.beds} />
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
};

const Header = () => (
    <header className={styles.header}>
        <div className={styles.logoContainer}>
            <h1 className={styles.hospitalName}>{dummyData.hospitalName}</h1>
            <p className={styles.floorNumber}>{dummyData.floorNumber}</p>
        </div>
        <div className={styles.headerControls}>
            <ToggleButton label="이름보기" />
            <FilterButtons />
        </div>
        <div className={styles.headerActions}>
            <PageSelector />
            <UserInfo />
        </div>
    </header>
);

const ToggleButton = ({ label }) => (
    <div className={styles.toggleButtonContainer}>
        <span className={styles.toggleLabel}>{label}</span>
        <button className={styles.toggleButton} aria-label={`Toggle ${label}`}>
            <span className={styles.toggleSlider} />
        </button>
    </div>
);

const FilterButtons = () => {
    const filters = ['전체', '난간', '수액G', '수액A', '수액C', '산소', '수행', 'I-care'];
    return (
        <div className={styles.filterContainer}>
            {filters.map((filter) => (
                <button key={filter} className={styles.filterButton} aria-label={`Filter by ${filter}`}>
                    <span className={styles.filterIcon} />
                    <span className={styles.filterLabel}>{filter}</span>
                </button>
            ))}
        </div>
    );
};

const PageSelector = () => (
    <button className={styles.pageSelector} aria-label="Change page">
        <span className={styles.pageSelectorText}>페이지 변경</span>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b405ec1668f536559eef358b49d21fa333a2289b3d518ae27854428cd215d071?placeholderIfAbsent=true&apiKey=7166793c975948ad9dfe5aaad9332717" alt="" className={styles.pageSelectorIcon} />
    </button>
);

const UserInfo = () => (
    <div className={styles.userInfo}>
        <p className={styles.userLoginInfo}>{dummyData.userInfo}</p>
        <div className={styles.userActions}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7de53238bf2e15063cd702cd551925a7339a1c9302562d58eb91bb668df23c3f?placeholderIfAbsent=true&apiKey=7166793c975948ad9dfe5aaad9332717" alt="User action 1" className={styles.userActionIcon} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/44a33898e9149e81c5929a70dbdf9aef78d3fab702102b1eb17bb56b1c375c0e?placeholderIfAbsent=true&apiKey=7166793c975948ad9dfe5aaad9332717" alt="User action 2" className={styles.userActionIcon} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea496168d719e958741aaf21df76243b2a10a813eba5d66fa1124c1ac7669c1c?placeholderIfAbsent=true&apiKey=7166793c975948ad9dfe5aaad9332717" alt="User action 3" className={styles.userActionIcon} />
        </div>
    </div>
);

const RoomOverview = ({ roomNumber, bedCount }) => (
    <article className={styles.roomOverview}>
        <div className={styles.roomSectionContainer}>
            <div className={styles.leftRoomSection}>
                {[...Array(3)].map((_, index) => (
                    <BedContainer key={`left-${index}`} side="left" />
                ))}
            </div>
            <div className={styles.rightRoomSection}>
                {[...Array(3)].map((_, index) => (
                    <BedContainer key={`right-${index}`} side="right" />
                ))}
            </div>
        </div>
        <p className={styles.roomNumber}>Room {roomNumber}</p>
    </article>
);

const BedContainer = ({ side }) => (
    <div className={`${styles.bedContainer} ${styles[`${side}BedContainer`]}`}>
        {side === 'right' && <TherapyOrder />}
        <PatientContainer />
        {side === 'left' && <TherapyOrder />}
    </div>
);

const PatientContainer = () => (
    <div className={styles.patientContainer}>
        <BedView />
        <MonitoringData />
    </div>
);

const BedView = () => (
    <div className={styles.bedView}>
        <div className={styles.bedImageContainer}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d12da0a7c2744365b66fc9bd25e51516a7c89f89c4243a4e40b8d6354430c991?placeholderIfAbsent=true&apiKey=7166793c975948ad9dfe5aaad9332717" alt="" className={styles.bedBackground} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ece25d7d6ef8db1f14ee14624c09ca669fb22a6e5e015792d18f6a79af24607f?placeholderIfAbsent=true&apiKey=7166793c975948ad9dfe5aaad9332717" alt="Patient bed" className={styles.bedForeground} />
        </div>
    </div>
);

const MonitoringData = () => (
    <div className={styles.monitoringData}>
        <DataDisplay icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d4856f73b42ae1be7f1ae3a787f8d2ca286f4a82d7f944ad6bc1dfebbbc21040?placeholderIfAbsent=true&apiKey=7166793c975948ad9dfe5aaad9332717" label="Fluid" value1="5%" value2="3M" />
        <DataDisplay icon="https://cdn.builder.io/api/v1/image/assets/TEMP/062b752c29e03fad418cdd97dde49a2659b37eb1b0c708631f83bda0bc8d13aa?placeholderIfAbsent=true&apiKey=7166793c975948ad9dfe5aaad9332717" label="Heart" value1="5%" value2="5%" />
    </div>
);

const DataDisplay = ({ icon, label, value1, value2 }) => (
    <div className={styles.dataDisplay}>
        <img src={icon} alt="" className={styles.dataIcon} />
        <div className={styles.dataInfo}>
            <span className={styles.dataValue}>{value1}</span>
            <span className={styles.dataValue}>{value2}</span>
        </div>
    </div>
);

const TherapyOrder = () => (
    <div className={styles.therapyOrder}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecd70a4ccb1a6ea9d6e78ff795e1a52114223167e45bafafe5ce0c9f540da1b4?placeholderIfAbsent=true&apiKey=7166793c975948ad9dfe5aaad9332717" alt="Therapy order" className={styles.therapyIcon} />
    </div>
);

const Footer = () => (
    <footer className={styles.footer}>
        <HospitalStatus />
        <FooterButtons />
    </footer>
);

const HospitalStatus = () => (
    <div className={styles.hospitalStatus}>
        <p className={styles.statusItem}>병실: {dummyData.roomCount}</p>
        <p className={styles.statusItem}>병상: {dummyData.bedCount}</p>
        <p className={styles.statusItem}>환자: {dummyData.patientCount}</p>
        <p className={styles.statusItem}>자리비움: {dummyData.absentCount}</p>
    </div>
);

const FooterButtons = () => (
    <div className={styles.footerButtons}>
        <button className={styles.footerButton}>페이지 변경</button>
        <button className={styles.footerButton}>액팅관리</button>
        <button className={styles.footerButton}>I-nurse</button>
    </div>
);

export default HospitalFloorDemo;
