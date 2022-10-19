import {createTheme, Theme} from '@mui/material/styles';


let lightModeTheme: Theme;
lightModeTheme = createTheme({

    palette: {
        primary: {
            // main: '#ff001b',
            main: '#0aa3ff',
        },
        secondary: {
            main: '#ffffff',
        },
        background: {
            default: '#b4b4b4',
        },
    },
});

export {lightModeTheme};

let darkModeTheme: Theme;
darkModeTheme = createTheme({

    palette: {
        primary: {
            // main: '#ff001b',
            main: '#0aa3ff',
        },
        secondary: {
            main: '#ffffff',
        },
        background: {
            default: '#b4b4b4',
        },
    },
});

export {darkModeTheme};