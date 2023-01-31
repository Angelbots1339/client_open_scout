import {INivoLine} from "./NivoLine";
import {lightNivoTheme} from "../../../../../theme";

const testData = [
    {
        id: "test1",
        data: [
            {
                x: 1,
                y: 1
            }, {
                x: 2,
                y: 4
            }, {
                x: 3,
                y: 1
            }, {
                x: 4,
                y: 1
            }, {
                x: 5,
                y: 5
            }
        ]
    }, {
        id: "test2",
        data: [
            {
                x: 1,
                y: 4
            }, {
                x: 2,
                y: 3
            }, {
                x: 3,
                y: 0
            }, {
                x: 4,
                y: 1
            }, {
                x: 5,
                y: 1
            }
        ]
    }
]


const testProps = {
    data:testData,
    xLabel:"Time",
    yLabel:"Value",
    title:"Test",
    width:500,
    height:400,
    theme:lightNivoTheme,
    enableGridX:false,
    enableGridY:false,
    margin:{top: 50, right: 50, bottom: 0, left: 50},
gridYValues:[1, 2, 3, 4, 5],
enableArea:true,
enablePoints:false,
useMesh:true,
}

const base: INivoLine = {

    size: "large",
    props: testProps,
};

export const defaultTableDraggableProps = {
    base,
};