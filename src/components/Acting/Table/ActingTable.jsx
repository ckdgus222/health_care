import "./ActingTable.css"


const ActingTable = () =>{

   return (
      <div className="table-layout">
      <div className="header">
        <div className="tab">병실관리</div>
        <div className="tab">수액관리</div>
        <div className="tab">예약관리</div>
        <div className="tab">처치관리</div>
        <div className="tab">욕창/낙상관리</div>
      </div>
      <div className="table-section">
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

      <div className="table-title">병동전체</div>

      <div className="table-section">
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