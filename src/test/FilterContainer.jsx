// src/Tablet/pages/test/FilterContainer.jsx
import React from 'react';
import styles from './HospitalFloorTest.module.css';

const FilterContainer = () => {
    return (
        <div className={styles.filtercontainer}>
            {['전체', '난간', '수액G', '수액A', '수액C', '산소', '수행', 'I-care'].map((filter, index) => (
                <div key={index} className={styles.filterbutton1}>
                    <div className={styles.eclipseOutline} />
                    <b className={styles.b}>{filter}</b>
                </div>
            ))}
        </div>
    );
};

export default FilterContainer;
