import "./Select.css";

const Select = (item) => {
  const { data, margin } = item;
 

  // className 을 변수에 담아서 사용 
  const className = `select_box ${margin ? margin : ""}`

  return (
    <div  className={className}>
      <p>{data.patName}</p>
      <p>{data.deptName}</p>
      <p>{data.patSex}</p>
    </div>
  );
};

export default Select;
