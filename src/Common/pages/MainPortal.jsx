import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MainPortal.module.css';

const MainPortal = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className={styles.portalContainer}>
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>moredigm</h1>
            </div>
            <div className={styles.serviceContainer}>
                <div className={styles.servicesGrid}>
                    <div className={styles.serviceItem} onClick={() => handleNavigation('/roommain')}>
                        <img src="/images/App-img/care.png" alt="EUM:care" className={styles.icon}/>
                        <p className={styles.serviceText}>EUM:care</p>
                    </div>
                    <div className={styles.serviceItem} onClick={() => handleNavigation('/roommain')}>
                        <img src="/images/App-img/care.png" alt="EUM:care" className={styles.icon}/>
                        <p className={styles.serviceText}>EUM:care</p>
                    </div>
                    <div className={styles.serviceItem} onClick={() => handleNavigation('/eum')}>
                        <img src="/images/App-img/endo.png" alt="EUM:endo" className={styles.icon}/>
                        <p className={styles.serviceText}>EUM:endo</p>
                    </div>
                    <div className={styles.serviceItem} onClick={() => handleNavigation('/eum')}>
                        <img src="/images/App-img/endo.png" alt="EUM:endo" className={styles.icon}/>
                        <p className={styles.serviceText}>EUM:endo</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPortal;
