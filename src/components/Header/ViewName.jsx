import styles from "./ViewName.module.css";

const ViewName = ({ text, onClick, checked }) => {
  console.log(`Rendering ${text}: ${checked ? "ON" : "OFF"}`);

  return (
    <div className={styles.viewBox}>
      <h2 className={styles.viewText}>{text}</h2>
      <label className={styles.switch}>
        <input
          type="checkbox"
          onClick={() => {
            console.log(`Checkbox for ${text} clicked`);
            onClick();
          }}
          checked={checked}
          readOnly
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};

export default ViewName;
