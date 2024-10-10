import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// 각 기기별 페이지 컴포넌트
import DesktopApp from "./Desktop/pages/DesktopApp.jsx";
import TabletApp from "./Tablet/pages/TabletApp.jsx";
import MobileApp from "./Mobile/pages/MobileApp.jsx";
import RoomMain from "./Desktop/pages/RoomMain.jsx";
import Eum from "./Desktop/pages/Eum.jsx";

// 데이터 파일들
import data from './Data.json';
import roomData from './Room.json';
import equipmentData from './Equipment.json';

// 스타일
import './App.css';
import HospitalFloor from "./Tablet/pages/HospitalFloor/HospitalFloor.jsx";
import HospitalFloorDemo from "./Tablet/pages/HospitalFloorDemo/HospitalFloorDemo.jsx";
import HospitalFloorTest from "./test/HospitalFloorTest.jsx";

// 컨텍스트 생성
export const Health = createContext(undefined);
export const Selected = createContext(undefined);

function App() {
    // 상태 관리
    const [category, setCategory] = useState("");

    // 미디어 쿼리 설정
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <Health.Provider value={{ data, roomData, equipmentData }}>
            <Selected.Provider value={{ category, setCategory }}>
                {/* 라우팅만 남겨두고, BrowserRouter는 main.jsx에서 사용하므로 제거 */}
                <Routes>
                    {isDesktop && (
                        <>
                            <Route path="/" element={<DesktopApp />} />
                            <Route path="/roommain" element={<RoomMain />} />
                            <Route path="/eum" element={<Eum />} />
                            <Route path="/hospitalfloor" element={<HospitalFloorDemo />} />
                            <Route path="/hospitalfloortest" element={<HospitalFloorTest />} />
                        </>
                    )}
                    {isTablet && (
                        <>
                            <Route path="/" element={<TabletApp />} />
                            <Route path="/roommain" element={<RoomMain />} />
                            <Route path="/eum" element={<Eum />} />
                            <Route path="/hospitalfloor" element={<HospitalFloor />} />
                        </>
                        )
                    }
                    {isMobile && <Route path="/" element={<MobileApp />} />}
                </Routes>
            </Selected.Provider>
        </Health.Provider>
    );
}

export default App;
