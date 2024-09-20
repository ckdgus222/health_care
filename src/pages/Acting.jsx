import styles from './Acting.module.css'
import ActingHeader from "../components/Acting/ActingHeader/ActingHeader.jsx";
import HeaderContainer from "../components/Header/HeaderContainer"
import PatientStatus from "../components/Acting/PatientStatus"
import ActingTable from "../components/Acting/ActingTable/ActingTable.jsx";
import RoomStatus from "../components/Acting/Status/RoomStatus.jsx";
import { useContext, useState } from "react";
import { Health } from "../App.jsx";


const Acting = () => {
    const {data} = useContext(Health);
    const [selectedRoom, setSelectedRoom] = useState("5111");

    return (
        <div className={styles.layoutContainer}>
            <ActingHeader />
            <ActingTable />
            <RoomStatus data={data} setSelectedRoom={setSelectedRoom}/>
            {/*<div className={styles.roomstatus} />*/}
            <div className={styles.actingmemo} />
            <div className={styles.memo} />
            <div className={styles.bottomFooter} />
        </div>);
};

export default Acting
