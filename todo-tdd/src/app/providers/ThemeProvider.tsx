import {createTheme} from "@mui/material";

declare module '@mui/material/styles' {
    interface Palette {
        interaction: {
            success: string;
            error: string;
            warning: string;
            info: string;
        };
        button: {
            active: string;
            disabled: string;
            disabledBg: string;
        };
    }

    interface PaletteOptions {
        interaction?: {
            success?: string;
            error?: string;
            warning?: string;
            info?: string;
        };
        button?: {
            active?: string;
            disabled?: string;
            disabledBg?: string;
        };
    }
}

export const theme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    width: '375px',
                    margin: '0 auto',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                    minHeight: '100vh', // 모바일 화면 높이 유지
                },
            },
        },
    },
    palette: {
        background: {
            paper: '#ffffff',
            default: '#F7F9FD',
        },
        text: {
            primary: '#1f2123',
            secondary: '#707274',
            disabled: '#aeaeae',
        },
        button: {
            active: '#757575',
            disabled: '#aaaaaa',
            disabledBg: '#E0E0E0',
        },
        primary: {
            main: '#3869B2',
            light: '#487BBE',
        },
        secondary: {
            main: '#3869B2',
            light: '#487BBE',
        },
        interaction: {
            success: '#219653',
            error: '#EB5757',
            warning: '#F2994A',
            info: '#F2C94C',
        },
    },
});