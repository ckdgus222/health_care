import "./SelectBox.css";
import { select } from "./../../util/tabBoxSelect";

const SelectBox = ({menuTab}) => {

  return <div style={{right:select(menuTab)}} className="tab_box"></div>;
};

export default SelectBox;
