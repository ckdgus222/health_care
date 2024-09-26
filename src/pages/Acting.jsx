// Acting.jsx
import styles from './Acting.module.css';
import ActingHeader from "../components/Acting/ActingHeader/ActingHeader.jsx";
import ActingTable from "../components/Acting/ActingTable/ActingTable.jsx";
import MainStatus from "../components/Acting/Status/MainStatus.jsx";

// Acting.jsx 수정

const Acting = () => {
    return (
        <div className={styles.layoutContainer}>
            <ActingHeader className={styles.header} />
            <ActingTable className={styles.actingtable} />
            <MainStatus className={styles.roomstatus} />
            <div className={styles.actingmemo} />
            <div className={styles.memo} />
            <div className={styles.bottomFooter} />
        </div>
    );
};

export default Acting;
