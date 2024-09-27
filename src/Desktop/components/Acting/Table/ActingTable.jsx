import styles from "./ActingTable.module.css"


const ActingTable = () =>{

   return (
      <div className={styles.tableLayout}>
      <div className={styles.header}>
        <div className={styles.tab}>병실관리</div>
        <div className={styles.tab}>수액관리</div>
        <div className={styles.tab}>예약관리</div>
        <div className={styles.tab}>처치관리</div>
        <div className={styles.tab}>욕창/낙상관리</div>
      </div>
      <div className={styles.tableSection}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>병실</th>
              <th>성명</th>
              <th>주치의</th>
              <th>처치1</th>
              <th>처치2</th>
              <th>메모</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }, (_, i) => (
              <tr key={i}>
                <td><input type="checkbox" /></td>
                <td>{i + 1}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.tableTitle}>병동전체</div>

      <div className={styles.tableSection}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>병실</th>
              <th>성명</th>
              <th>주치의</th>
              <th>처치1</th>
              <th>처치2</th>
              <th>메모</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }, (_, i) => (
              <tr key={i}>
                <td><input type="checkbox" /></td>
                <td>{i + 1}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

   )
}

export default ActingTable