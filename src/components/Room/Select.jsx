import "./Select.css";

const Select = (item) => {
  const { data } = item;


  return (
    <div className="select_box">
      <p>{data.patName}</p>
      <p>{data.deptName}</p>
      <p>{data.patSex}</p>
    </div>
  );
};

export default Select;
