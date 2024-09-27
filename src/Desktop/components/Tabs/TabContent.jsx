import styles from "./TabContent.module.css";
import SelectBox from "./SelectBox";
import TabsHeader from "./TabsHeader";
import Button from "../Button";

const TabContent = ({ menuTab,setTab }) => {

    
 
  return (
    <div className={styles.tabContainer}>
      {/* <SelectBox menuTab={menuTab} /> */}
      <div className={styles.tabContent}>
        <TabsHeader setTab={setTab} menuTab={menuTab}/>
        <div>메모장</div>
        <div className={styles.tabBottom}>
          <Button text={"확인"}/>
          <Button text={"취소"}/>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
