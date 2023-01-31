import type {ReactElement, ReactNode} from 'react';
import type {NextPage} from 'next';
import type {AppProps} from 'next/app';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {darkModeTheme, lightModeTheme} from "../theme";
import React from "react";

export type PageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: PageWithLayout;
};

const isDarkMode = false;

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(
        <div>
            <ThemeProvider theme={CurrentTheme()}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </div>
    );
}

export function CurrentTheme() {
    return isDarkMode ? darkModeTheme : lightModeTheme;
}


