// src/Tablet/pages/test/Header.jsx
import React from 'react';
import styles from './HospitalFloorTest.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <img className={styles.homebuttonDemoIcon} alt=""
                 src="images/test/hospitalfloor/images/test/hospitalfloor/HomeButton_demo.png"/>
            <img className={styles.preferencebuttonDemoIcon} alt=""
                 src="images/test/hospitalfloor/PreferenceButton_demo.png"/>
            <img className={styles.warningbuttonDemoIcon} alt=""
                 src="images/test/hospitalfloor/WarningButton_demo.png"/>
            <b className={styles.userlogininfoDemo}>홍간호님 로그인 중</b>
            <div className={styles.dropdownpage}>
                <b className={styles.b}>페이지 변경</b>
                <img className={styles.dropdownpageChild} alt="" src="images/test/hospitalfloor/Polygon 1.svg"/>
            </div>
            <div className={styles.filtercontainer}>
                <div className={styles.filterbutton1}>
                    <div className={styles.eclipseOutline}/>
                    <b className={styles.b}>전체</b>
                </div>
                <div className={styles.filterbutton1}>
                    <div className={styles.eclipseOutline}/>
                    <b className={styles.b}>난간</b>
                </div>
                <div className={styles.filterbutton1}>
                    <div className={styles.eclipseOutline}/>
                    <b className={styles.b}>수액G</b>
                </div>
                <div className={styles.filterbutton1}>
                    <div className={styles.eclipseOutline}/>
                    <b className={styles.b}>수액A</b>
                </div>
                <div className={styles.filterbutton1}>
                    <div className={styles.eclipseOutline}/>
                    <b className={styles.b}>수액C</b>
                </div>
                <div className={styles.filterbutton1}>
                    <div className={styles.eclipseOutline}/>
                    <b className={styles.b}>산소</b>
                </div>
                <div className={styles.filterbutton1}>
                    <div className={styles.eclipseOutline}/>
                    <b className={styles.b}>수행</b>
                </div>
                <div className={styles.filterbutton1}>
                    <div className={styles.eclipseOutline}/>
                    <b className={styles.b}>I-care</b>
                </div>
            </div>
            <div className={styles.togglebuttonname}>
                <div className={styles.div}>이름보기</div>
                <div className={styles.togglebutton}>
                    <div className={styles.eclipseFill}/>
                </div>
            </div>
            <div className={styles.logocontainer}>
                <b className={styles.b}>EUM:care</b>
                <div className={styles.div1}>0511</div>
            </div>
        </div>
    );
};

export default Header;
