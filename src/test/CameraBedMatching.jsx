import React, { useState, useEffect } from 'react';
import styles from './CameraBedMatching.module.css';

const CameraBedMatching = () => {

    const mockData = {
        matchings: {
            "101": "101", "102": "102", "103": null, "104": null, "105": null,
            "106": null, "107": null, "108": null, "109": null, "110": "110"
        }
    };

    const [matchings, setMatchings] = useState(mockData.matchings);
    const [selectedCamera, setSelectedCamera] = useState(null);
    const [selectedBed, setSelectedBed] = useState(null);

    const matchedPairs = Object.entries(matchings).filter(([camera, bed]) => bed !== null);
    const unmatchedCameras = Object.keys(matchings).filter((camera) => matchings[camera] === null);
    const unmatchedBeds = unmatchedCameras;

    const handleMatching = () => {
        if (selectedCamera && selectedBed) {
            setMatchings(prev => ({
                ...prev,
                [selectedCamera]: selectedBed
            }));
            setSelectedCamera(null);
            setSelectedBed(null);
        }
    };

    const handleRemoveMatching = (camera) => {
        if (window.confirm("삭제하시겠습니까?")) {
            setMatchings(prev => ({
                ...prev,
                [camera]: null
            }));
        }
    };

    useEffect(() => {
        if (selectedCamera && selectedBed) {
            handleMatching();
        }
    }, [selectedCamera, selectedBed]);

    const handleSendJson = () => {
        console.log(JSON.stringify({ matchings }, null, 2));
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {/* 좌측: 매칭되지 않은 카메라 리스트 */}
                <div className={styles.section}>
                    <h2 className={`${styles.title} ${styles.cameraTitle}`}>카메라 번호</h2>
                    <div className={styles.list}>
                        {unmatchedCameras.map((camera) => (
                            <div
                                key={camera}
                                className={`${styles.item} ${styles.cameraItem} ${selectedCamera === camera ? styles.selectedItem : ''}`}
                                onClick={() => setSelectedCamera(camera)}
                            >
                                {camera}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 중앙: 선택된 카메라와 침대 매칭 */}
                <div className={styles.matchingSection}>
                    <h2 className={`${styles.title} ${styles.bedTitle}`}>매칭</h2>
                    <div>
                        <input
                            value={selectedCamera || ''}
                            readOnly
                            placeholder="카메라 번호 선택"
                            className={styles.input}
                        />
                        <input
                            value={selectedBed || ''}
                            readOnly
                            placeholder="침대 번호 선택"
                            className={styles.input}
                        />
                        <div
                            onClick={handleSendJson}
                            className={styles.button}
                        >
                            보내기
                        </div>
                    </div>
                </div>

                {/* 우측: 매칭되지 않은 침대 리스트 */}
                <div className={styles.section}>
                    <h2 className={`${styles.title} ${styles.bedTitle}`}>침대 번호</h2>
                    <div className={styles.list}>
                        {unmatchedBeds.map((bed) => (
                            <div
                                key={bed}
                                className={`${styles.item} ${styles.bedItem} ${selectedBed === bed ? styles.selectedItem : ''}`}
                                onClick={() => setSelectedBed(bed)}
                            >
                                {bed}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 매칭된 카메라와 침대 리스트 */}
            <div className={styles.matchedList}>
                <h2 className={`${styles.title} ${styles.matchedTitle}`}>매칭된 리스트</h2>
                <div>
                    {matchedPairs.map(([camera, bed]) => (
                        <div
                            key={camera}
                            className={styles.matchedItem}
                        >
                            <span className={styles.matchedText}>카메라 {camera}번 - 침대 {bed}번</span>
                            <div
                                onClick={() => handleRemoveMatching(camera)}
                                className={styles.deleteButton}
                            >
                                삭제
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CameraBedMatching;
