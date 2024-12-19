import {RouterProvider} from "react-router-dom";
import {router} from "./providers/RouterProvider.tsx";
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./providers/ThemeProvider.tsx";
import "./main.css"

export default function App() {
    return <ThemeProvider theme={theme}>
        <CssBaseline/>
        {/* 레이아웃을 모바일 크기로 고정 */}
        <Box
            sx={{
                width: '375px', // 모바일 크기 고정
                margin: '0 auto',
                minHeight: '100vh', // 화면 높이 유지
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // 그림자 효과
                borderRadius: '8px', // 둥근 모서리
                overflow: 'hidden',
                backgroundColor: '#fff',
            }}
        >
            <RouterProvider router={router}/>
        </Box>
    </ThemeProvider>
}
