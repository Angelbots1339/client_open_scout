import * as React from "react"
import {SVGProps, useState} from "react"
import {CurrentTheme} from "../../../../pages/_app";


interface IPrematchPlacementSVGProps extends SVGProps<SVGSVGElement> {

    setPrematchPlacement:  React.Dispatch<React.SetStateAction<("cube" | "cone")[]>>;
    getPrematchPlacement: () => ("cube" | "cone")[];

}

const PrematchPlacementSVG = (props: IPrematchPlacementSVGProps) => {


    const cubeColor = "#c424d7";
    const coneColor = "#ffda2f";

    const [rerender, setRerender] = useState(false);



    const handleClick =  (idx: number) => {
        let tempArr = props.getPrematchPlacement();
        tempArr[idx] = props.getPrematchPlacement()[idx] === "cube" ? "cone" : "cube";
        props.setPrematchPlacement(tempArr);
        setRerender(!rerender);
        console.log(tempArr);
    }


    return (
        <svg
            viewBox="27.562 223.972 137.478 30.289"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <defs>
                <linearGradient
                    id="a"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(.99371 0 0 1.00858 -1257.074 -1865.814)"
                >
                    <title>{"Light Grey"}</title>
                    <stop
                        style={{
                            stopColor: "#737373",
                        }}
                    />
                </linearGradient>
            </defs>
            <rect
                x={8.353}
                y={60.933}
                width={30.289}
                height={137.476}
                style={{
                    fill: "none",
                    stroke: "#000",
                    strokeWidth: "1.0013px",
                    strokeLinejoin: "round",
                }}
                rx={1.422}
                ry={1.422}
                transform="matrix(.00005 1 -1 0 225.97 215.62)"
            />
            <circle
                style={{
                    fill: props.getPrematchPlacement()[0] === "cube" ? cubeColor : coneColor,
                    strokeLinejoin: "round",
                }}
                cx={-80.356}
                cy={-268.53}
                transform="rotate(90 -222.183 96.3)"
                r={10}
                onClick={() => {
                    handleClick(0);
                }}
            />
            <circle
                style={{
                    fill: props.getPrematchPlacement()[1] === "cube" ? cubeColor : coneColor,
                    strokeLinejoin: "round",
                }}
                cx={-80.61}
                cy={-237.816}
                transform="rotate(90 -222.183 96.3)"
                r={10}
                onClick={() => {
                    handleClick(1);
                }}
            />
            <circle
                style={{
                    fill: props.getPrematchPlacement()[2] === "cube" ? cubeColor : coneColor,
                    strokeLinejoin: "round",
                }}
                cx={-80.618}
                cy={-207.038}
                transform="rotate(90 -222.183 96.3)"
                r={10}
                onClick={() => {
                    handleClick(2);
                }}
            />
            <circle
                style={{
                    fill: props.getPrematchPlacement()[3] === "cube" ? cubeColor : coneColor,
                    strokeLinejoin: "round",
                }}
                cx={-80.647}
                cy={-176.322}
                transform="rotate(90 -222.183 96.3)"
                r={10}
                onClick={() => {
                    handleClick(3);
                }}
            />
            <text
                x={92}
                y={184}
                transform={"rotate(90 100 240)"}
                style={{
                    whiteSpace: "pre",
                    fill: CurrentTheme().palette.text.primary,
                    fontFamily: "Arial,sans-serif",
                    fontSize: "6.9px",
                }}>
                Top
            </text>
            {/*<image*/}
            {/*    x={30}*/}
            {/*    y={250}*/}
            {/*    width={50}*/}
            {/*    height={50}*/}
            {/*    href={"public/images/teleop/CubeRotoscoped.png"}*/}
            {/*/>*/}
        </svg>
    )
}

export default PrematchPlacementSVG;
