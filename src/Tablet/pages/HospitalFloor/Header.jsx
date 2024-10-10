import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <h1 className={styles.eumCare}>EUM:care</h1>
                <span className={styles.floorNumber}>0511</span>
            </div>
            <div className={styles.controlsContainer}>
                <div className={styles.toggleButtonName}>
                    <span className={styles.toggleLabel}>이름보기</span>
                    <button className={styles.toggleButton} aria-label="Toggle name visibility">
                        <span className={styles.toggleIndicator} />
                    </button>
                </div>
                <nav className={styles.filterContainer}>
                    {['전체', '난간', '수액G', '수액A', '수액C', '산소', '수행', 'I-care'].map((filter, index) => (
                        <button key={index} className={styles.filterButton} aria-label={`Filter by ${filter}`}>
                            <span className={styles.filterIndicator} />
                            <span className={styles.filterLabel}>{filter}</span>
                        </button>
                    ))}
                </nav>
            </div>
            <div className={styles.userControls}>
                <button className={styles.pageChangeButton}>
                    페이지 변경
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b405ec1668f536559eef358b49d21fa333a2289b3d518ae27854428cd215d071?placeholderIfAbsent=true&apiKey=7166793c975948ad9dfe5aaad9332717" alt="" className={styles.dropdownIcon} />
                </button>
                <div className={styles.userInfo}>
                    <p className={styles.userLoginInfo}>홍간호님 로그인 중</p>
                    <div className={styles.userActions}>
                        <button aria-label="User action 1"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7de53238bf2e15063cd702cd551925a7339a1c9302562d58eb91bb668df23c3f?placeholderIfAbsent=true&apiKey=7166793c975948ad9dfe5aaad9332717" alt="" /></button>
                        <button aria-label="User action 2"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/44a33898e9149e81c5929a70dbdf9aef78d3fab702102b1eb17bb56b1c375c0e?placeholderIfAbsent=true&apiKey=7166793c975948ad9dfe5aaad9332717" alt="" /></button>
                        <button aria-label="User action 3"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea496168d719e958741aaf21df76243b2a10a813eba5d66fa1124c1ac7669c1c?placeholderIfAbsent=true&apiKey=7166793c975948ad9dfe5aaad9332717" alt="" /></button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
