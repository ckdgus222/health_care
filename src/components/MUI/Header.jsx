import React from "react";
import { AppBar, Toolbar, Typography, Stack, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";  // MUI 아이콘 추가

const HeaderContainer = ({
                             setRoomAir,
                             setEquipment,
                             setSelects,
                             setMenuTab,
                             setTab,
                             menuTab,
                             roomAir,
                             equipment,
                         }) => {
    return (
        <AppBar position="static" sx={{ backgroundColor: "#1976d2", padding: "10px 0" }}>
            <Toolbar>
                <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">

                    {/* Left Section (Eums component) */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Eums />
                    </Box>

                    {/* Center Section */}
                    <Stack direction="row" spacing={3} alignItems="center">
                        <ViewName text="이름보기" onClick={() => setSelects((prev) => !prev)} />
                        <Fieldset />
                        <ViewName text="병실환경" onClick={setRoomAir} checked={roomAir} />
                        <ViewName text="기구관리" onClick={setEquipment} checked={equipment} />
                        <Menus menuTab={menuTab} setMenuTab={setMenuTab} setTab={setTab} />
                    </Stack>

                    {/* Right Section (Setting component) */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Setting />
                    </Box>

                    {/* Optional: Mobile Menu Icon */}
                    <IconButton sx={{ display: { xs: "block", sm: "none" }, ml: 2 }}>
                        <MenuIcon sx={{ color: "white" }} />
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderContainer;
