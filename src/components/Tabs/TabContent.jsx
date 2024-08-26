import "./TabContent.css";
import SelectBox from "./SelectBox";

const TabContent = ({ menuTab }) => {
   
 
  return (
    <>
      <SelectBox menuTab={menuTab} />
      <div className="tab_container">{menuTab}</div>
    </>
  );
};

export default TabContent;
