import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "@mui/system";
import {lightModeTheme} from "../theme"
import {darkModeTheme} from "../theme"


function MyApp({ Component, pageProps }: AppProps) {
  return (

      <ThemeProvider theme={lightModeTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}



export default MyApp
