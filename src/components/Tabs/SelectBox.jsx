import styles from "./SelectBox.module.css";
import { select } from "./../../util/tabBoxSelect";

const SelectBox = ({menuTab}) => {

  return <div style={{right:select(menuTab)}} className={styles.tabBox}></div>;
};

export default SelectBox;
