import {createTheme, Theme} from '@mui/material/styles';

let lightModeTheme: Theme;
lightModeTheme = createTheme({
    typography: {
        button: {
            textTransform: 'none'
        }
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#0aa3ff',
        },
        secondary: {
            main: '#d086ff',
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
        text: {
            primary: "#000000",
            secondary: "#696969"
        }
    },
});

export {lightModeTheme};

let darkModeTheme: Theme;
darkModeTheme = createTheme({
    typography: {
        button: {
            textTransform: 'none'
        }
    },
    palette: {
        mode: 'dark',
        primary: {
            // main: '#ff001b',
            main: '#00e1ff',
        },
        secondary: {
            main: '#ff00ea',
        },
        background: {
            default: '#797979',
            paper: '#6c6c6c',
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#FFFFFF",
        }
    },
});

export {darkModeTheme};

// Palette Options Interface for reference
//
// export interface PaletteOptions {
//     primary?: PaletteColorOptions;
//     secondary?: PaletteColorOptions;
//     error?: PaletteColorOptions;
//     warning?: PaletteColorOptions;
//     info?: PaletteColorOptions;
//     success?: PaletteColorOptions;
//     mode?: PaletteMode;
//     tonalOffset?: PaletteTonalOffset;
//     contrastThreshold?: number;
//     common?: Partial<CommonColors>;
//     grey?: ColorPartial;
//     text?: Partial<TypeText>;
//     divider?: string;
//     action?: Partial<TypeAction>;
//     background?: Partial<TypeBackground>;
//     getContrastText?: (background: string) => string;
// }