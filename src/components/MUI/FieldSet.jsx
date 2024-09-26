import { useState, useEffect, useContext } from "react";
import { Selected } from "../../App";
import { useMediaQuery, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import styles from "./Fieldset.module.css";

const fieldSelect = ["전체", "난간", "수액G", "수액A", "수액C", "산소", "수행", "I-care"];

const Fieldset = () => {
    const [selected, setSelected] = useState(null);
    const { setCategory } = useContext(Selected);
    const isLargeScreen = useMediaQuery("(min-width:1920px)");

    useEffect(() => {
        if (fieldSelect.length > 0) {
            setSelected(fieldSelect[0]);
        }
    }, []);

    const handleOptionChange = (option) => {
        setSelected(option);
        setCategory(option);
    };

    return (
        <div className={styles.fieldsetBox}>
            {/* 1920px 이상일 때 기존 필드셋 표시 */}
            {isLargeScreen ? (
                <fieldset className={styles.fieldSet}>
                    {fieldSelect.map((item, i) => (
                        <label className={styles.labelStyle} key={i}>
                            <input
                                type="radio"
                                value={item}
                                name="contact"
                                className={styles.radioInput}
                                checked={selected === item}
                                onChange={() => handleOptionChange(item)}
                            />
                            <span className={styles.customRadio}></span>
                            <p style={{ marginTop: "0", color: "#FFF" }}>{item}</p>
                        </label>
                    ))}
                </fieldset>
            ) : (
                // 1920px 이하일 때 드롭다운 메뉴 표시
                <FormControl fullWidth>
                    <InputLabel>옵션 선택</InputLabel>
                    <Select
                        value={selected || ""}
                        onChange={(e) => handleOptionChange(e.target.value)}
                        className={styles.dropdown}
                        sx={{ color: "#FFF", backgroundColor: "#333" }}  // 스타일 조정 가능
                    >
                        {fieldSelect.map((item, i) => (
                            <MenuItem key={i} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            )}
        </div>
    );
};

export default Fieldset;
