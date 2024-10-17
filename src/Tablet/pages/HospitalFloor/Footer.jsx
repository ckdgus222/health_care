import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.hospitalStatusContainer}>
                <span className={styles.statusItem}>병실: 8</span>
                <span className={styles.statusItem}>병상: 48</span>
                <span className={styles.statusItem}>환자: 42</span>
                <span className={styles.statusItem}>자리비움: 6</span>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.footerButton}>페이지 변경</button>
                <button className={styles.footerButton}>액팅관리</button>
                <button className={styles.footerButton}>I-nurse</button>
            </div>
        </footer>
    );
};

export default Footer;
