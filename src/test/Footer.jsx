// src/Tablet/pages/test/Footer.jsx
import React from 'react';
import styles from './HospitalFloorTest.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.buttoncontainer}>
                {['페이지 변경', '액팅관리', 'I-nurse'].map((button, index) => (
                    <div key={index} className={styles.buttonpage}>
                        <b className={styles.b}>{button}</b>
                    </div>
                ))}
            </div>
            <div className={styles.hospitalstatuscontainer}>
                <b className={styles.b}>병실: 8</b>
                <b className={styles.b}>병상: 48</b>
                <b className={styles.b}>환자: 42</b>
                <b className={styles.b}>자리비움: 6</b>
            </div>
        </div>
    );
};

export default Footer;
