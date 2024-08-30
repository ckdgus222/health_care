import styles from "./TableBox.module.css";
import SideMenu from "./SideMenu";

const TableBox = ({ tempData }) => {
  return (
    <div className={styles.tableContainer}>
      <SideMenu />
      <div id="table1">
        <table className={`${styles.table} ${styles.col_100} ${styles.col}`}>
          <colgroup>
            <col width={"5%"} />
            <col width={"15%"} />
            <col width={"12%"} />
            <col width={"8%"} />
            <col width={"7%"} />
            <col width={"13%"} />
            <col width={"10%"} />
            <col width={"13%"} />
            <col width={"17%"} />
          </colgroup>
          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}></th>
              <th className={styles.th}>ID</th>
              <th className={styles.th}>이름</th>
              <th className={styles.th}>심박</th>
              <th className={styles.th}>호흡</th>
              <th className={styles.th}>혈압</th>
              <th className={styles.th}>Spo2</th>
              <th className={styles.th}>회복시간</th>
              <th className={styles.th}>안정율</th>
            </tr>
          </thead>
          {tempData.map((item, i) => (
            <tbody className={styles.tableBody} key={i}>
              <tr className={styles.tr}>
                <td
                  className={styles.td}
                  style={{ backgroundColor: "#3162C7", color: "white", fontWeight: "400" }}
                >
                  {1 + i}
                </td>
                <td className={styles.td}>2024031{Math.floor(Math.random() * 100)}</td>
                <td className={styles.td}>{item.patName}</td>
                <td className={styles.td}>{item.ecgRate}</td>
                <td className={styles.td}>{item.breathRate}</td>
                <td className={styles.td}>{`${Math.floor(Math.random() * 150) + 50}/${Math.floor(Math.random() * 100)}`}</td>
                <td className={styles.td}>102</td>
                <td className={styles.td}>{`${Math.floor(Math.random() * 60)}M`}</td>
                <td className={styles.td}>{`G${Math.floor(Math.random() * 5 + 1)}`}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TableBox;
