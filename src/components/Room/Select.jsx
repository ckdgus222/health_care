import styles from "./Select.module.css";

const Select = (item) => {
  const { data, margin } = item;
 

  // className 을 변수에 담아서 사용 
  const className = `${styles.selectBox} ${margin ? styles.marginReft : ""}`

  return (
    <div  className={className}>
      {/* <p>{data.patName}</p>
      <p>{data.deptName}</p>
      <p>{data.patSex}</p> */}
      <p>하이</p>
    </div>
  );
};

export default Select;
