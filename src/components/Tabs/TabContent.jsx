import "./TabContent.css";
import SelectBox from "./SelectBox";
import TabsHeader from "./TabsHeader";
import Button from "../Button";

const TabContent = ({ menuTab,setTab }) => {

    
 
  return (
    <div className="tab_container">
      {/* <SelectBox menuTab={menuTab} /> */}
      <div className="tab_content">
        <TabsHeader setTab={setTab} menuTab={menuTab}/>
        <div>메모장</div>
        <div className="tab_bottom">
          <Button text={"확인"}/>
          <Button text={"취소"}/>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
