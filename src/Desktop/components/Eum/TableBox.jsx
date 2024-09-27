import styles from "./TableBox.module.css";
import SideMenu from "./SideMenu";
import { useRef } from "react";
import { useEffect } from "react";

const TableBox = ({ tempData }) => {
  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef.current) {
      const rowCount = tempData.length;
      const tableHeight = tableRef.current.clientHeight;
      const rowHeight = tableHeight / rowCount;

      const rows = tableRef.current.querySelectorAll(`.${styles.tr}`);
      rows.forEach((row) => {
        row.style.height = `${rowHeight}px`;
      });
    }
  }, [tempData]);

  return (
    <div className={styles.tableContainer}>
            <SideMenu />
            <div id="table1" className={styles.tableWrapper}>
                <div className={styles.table}>
                    <div className={styles.tableHeader}>
                        <div className={styles.th} style={{ flex: "0 0 50px"}}></div>
                        <div className={styles.th} style={{ flex: "0 0 150px"}}>ID</div>
                        <div className={styles.th}>이름</div>
                        <div className={styles.th}>심박</div>
                        <div className={styles.th}>호흡</div>
                        <div className={styles.th}>혈압</div>
                        <div className={styles.th}>Spo2</div>
                        <div className={styles.th}>회복시간</div>
                        <div className={styles.th}>안정율</div>
                    </div>
                    {tempData.map((item, i) => (
                        <div className={styles.tableRow} key={i}>
                            <div className={styles.td} style={{ backgroundColor: "#3162C7", color: "white", fontWeight: "400", border:"1.5px solid #4e82ea" , flex: "0 0 50px"}}>
                                {1 + i}
                            </div>
                            <div className={styles.td} style={{ flex: "0 0 150px"}}>2024031{Math.floor(Math.random() * 100)}</div>
                            <div className={styles.td}>{item.patName}</div>
                            <div className={styles.td}>{item.ecgRate}</div>
                            <div className={styles.td}>{item.breathRate}</div>
                            <div className={styles.td}>{`${Math.floor(Math.random() * 150) + 50}/${Math.floor(Math.random() * 100)}`}</div>
                            <div className={styles.td}>102</div>
                            <div className={styles.td}>{`${Math.floor(Math.random() * 60)}M`}</div>
                            <div className={styles.td}>{`G${Math.floor(Math.random() * 5 + 1)}`}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  );
};

export default TableBox;
