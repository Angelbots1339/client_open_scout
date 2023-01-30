import styles from './NivoLine.module.css';
import React from "react";
// @ts-ignore
import Line from "nivo/lib/components/charts/line/Line"; // https://nivo.rocks/line/
import {lightNivoTheme} from "../../../../../theme";



export interface INivoLine {


    size: "small" | "medium" | "large";
    props: any;

}

const NivoLine: React.FC<INivoLine> = ({size, props}) => {

    const propsSmall: {width: number | string, height: number | string} = {
        width: 300,
        height: 200
    }
    const propsMedium: {width: number | string, height: number | string} = {
        width: 500,
        height: 350
    }
    const propsLarge: {width: number | string, height: number | string} = {
        width: 1000,
        height: 350
    }

    return (
        <Line
            theme={lightNivoTheme}
            enableGridX={false}
            enableGridY={false}
            enableArea={true}
            enablePoints={false}
            useMesh= {true}
            className={styles.component}
            {...size === "large" ? propsLarge : size === "medium" ? propsMedium : propsSmall}
            {...props}/>
    )
};


export default NivoLine;



