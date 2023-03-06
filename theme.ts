import {createTheme, Theme} from '@mui/material/styles';
// @ts-ignore
import {Theme as NivoTheme} from 'nivo/lib/defaults/theme';

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
            main: '#88eefd',
        },
        secondary: {
            main: '#ff8ef6',
        },
        background: {
            paper: '#424242',
            default: '#565656',
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#FFFFFF",
        }
    },
});

export {darkModeTheme};


const lightNivoTheme: NivoTheme = {
    background: "#ffffff",
    axis: {
        fontSize: "14px",
        tickColor: "#646464",
        ticks: {
            line: {
                stroke: "#555555"
            },
            text: {
                fill: "#ffffff"
            }
        },
        legend: {
            text: {
                fill: "#aaaaaa"
            }
        }
    },
    grid: {
        line: {
            stroke: "#555555"
        }
    }
};

export {lightNivoTheme};

const darkNivoTheme: NivoTheme = {
    background: "#222222",
    axis: {
        fontSize: "14px",
        tickColor: "#eee",
        ticks: {
            line: {
                stroke: "#555555"
            },
            text: {
                fill: "#ffffff"
            }
        },
        legend: {
            text: {
                fill: "#aaaaaa"
            }
        }
    },
    grid: {
        line: {
            stroke: "#555555"
        }
    }
};

export {darkNivoTheme};



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