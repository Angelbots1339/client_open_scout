import * as React from "react"
import { SVGProps } from "react"
import {CurrentTheme} from "../../../../pages/_app";
import {AutoPositionsI} from "../../../../pages/dashboard/scouting";


interface AutoFieldProps extends SVGProps<SVGSVGElement> {
    numberLocations?: AutoPositionsI[];
}


const AutoFieldHorizontalSVG = (props: AutoFieldProps) => {

    const possibleNumberLocations = {
        "cone": [
            {x: 215, y: 152},
            {x: 215, y: 122.5},
            {x: 215, y: 108},
            {x: 215, y: 80},
            {x: 215, y: 65.5},
            {x: 215, y: 35},
        ],
        "cube": [
            {x: 215, y: 136.5},
            {x: 215, y: 94},
            {x: 215, y: 51.5},

        ],
        "pickup": [
            {x: 240, y: 140.485},
            {x: 240, y: 110},
            {x: 240, y: 78.5},
            {x: 240, y: 48.503}
        ]
    }

    const placementPositionsY = {
        "cube": {
            "top": 190,
            "mid": 200,
            "hybrid": 215,
            "fail": 225,
        },
        "cone": {
            "top": 190,
            "mid": 200,
            "hybrid": 215,
            "fail": 225,
        }
    }

    return (
    // <svg
    //     viewBox="27.877 183.676 136.683 77.146"
    //     xmlns="http://www.w3.org/2000/svg"
    //     {...props}
    // >
    //     <defs>
    //         <linearGradient
    //             id="a"
    //             gradientUnits="userSpaceOnUse"
    //             gradientTransform="matrix(.99262 0 0 .99455 .506 -25.748)"
    //         >
    //             <title>{"Darkest Grey"}</title>
    //             <stop
    //                 style={{
    //                     stopColor: "#262626",
    //                 }}
    //             />
    //         </linearGradient>
    //         <linearGradient
    //             id="b"
    //             gradientUnits="userSpaceOnUse"
    //             gradientTransform="matrix(.99371 0 0 1.00858 -1257.074 -1865.814)"
    //         >
    //             <title>{"Light Grey"}</title>
    //             <stop
    //                 style={{
    //                     stopColor: "#737373",
    //                 }}
    //             />
    //         </linearGradient>
    //         <linearGradient
    //             id="c"
    //             gradientUnits="userSpaceOnUse"
    //             gradientTransform="matrix(1 0 0 1.00317 -.07 -85.385)"
    //         >
    //             <title>{"Darkgray"}</title>
    //             <stop
    //                 style={{
    //                     stopColor: "#555",
    //                 }}
    //             />
    //         </linearGradient>
    //         <linearGradient
    //             id="d"
    //             gradientUnits="userSpaceOnUse"
    //             gradientTransform="matrix(1.01439 0 0 1.04403 18.742 -53.682)"
    //         >
    //             <title>{"Team Color"}</title>
    //             <stop
    //                 style={{
    //                     stopColor: "#0048a7",
    //                 }}
    //             />
    //         </linearGradient>
    //         <linearGradient
    //             id="e"
    //             gradientUnits="userSpaceOnUse"
    //             gradientTransform="matrix(.9775 0 0 .56506 -1923.815 -4245.838)"
    //         >
    //             <title>{"Lightest grey"}</title>
    //             <stop
    //                 style={{
    //                     stopColor: "#eee",
    //                 }}
    //             />
    //         </linearGradient>
    //         <linearGradient
    //             id="f"
    //             gradientUnits="userSpaceOnUse"
    //             gradientTransform="matrix(.98332 0 0 .99602 214.698 -75.198)"
    //         >
    //             <title>{"Lighter gray"}</title>
    //             <stop
    //                 style={{
    //                     stopColor: "#bfbfbf",
    //                 }}
    //             />
    //         </linearGradient>
    //     </defs>
    //     <g>
    //         <path
    //             style={{
    //                 strokeWidth: ".580755px",
    //                 fill: "url(#a)",
    //                 strokeLinejoin: "round",
    //             }}
    //             d="M57.679 201.472h23.122v15.356H57.679z"
    //             transform="matrix(0 .9979 -.9995 0 318.448 126.105)"
    //         />
    //         <path
    //             style={{
    //                 strokeWidth: ".580755px",
    //                 fill: "url(#b)",
    //                 strokeLinejoin: "round",
    //             }}
    //             d="M57.711 259.202h13.181v11.44H57.711z"
    //             transform="matrix(0 .9979 -.9995 0 318.448 126.105)"
    //         />
    //         <path
    //             style={{
    //                 strokeWidth: ".580755px",
    //                 fill: "url(#c)",
    //                 strokeLinejoin: "round",
    //             }}
    //             d="M70.715 259.179h10.762v11.601H70.715z"
    //             transform="matrix(0 .9979 -.9995 0 318.448 126.105)"
    //         />
    //         <path
    //             style={{
    //                 strokeWidth: ".580755px",
    //                 fill: "url(#d)",
    //                 strokeLinejoin: "round",
    //             }}
    //             d="M57.719 243.899h23.044v15.371H57.719zM57.571 270.612h23.326v20.004H57.571zM57.662 186.256H80.78v15.242H57.662zM57.419 153.744h23.637v21.138H57.419z"
    //             transform="matrix(0 .9979 -.9995 0 318.448 126.105)"
    //         />
    //         <path
    //             style={{
    //                 strokeWidth: ".580755px",
    //                 fill: "url(#a)",
    //                 strokeLinejoin: "round",
    //             }}
    //             d="M57.722 228.439H80.76v15.481H57.722z"
    //             transform="matrix(0 .9979 -.9995 0 318.448 126.105)"
    //         />
    //         <path
    //             style={{
    //                 strokeWidth: ".580755px",
    //                 fill: "url(#b)",
    //                 strokeLinejoin: "round",
    //             }}
    //             d="M57.718 216.808h13.181v11.681H57.718z"
    //             transform="matrix(0 .9979 -.9995 0 318.448 126.105)"
    //         />
    //         <path
    //             style={{
    //                 strokeWidth: ".580755px",
    //                 fill: "url(#c)",
    //                 strokeLinejoin: "round",
    //             }}
    //             d="M70.888 216.791H81.65v11.707H70.888z"
    //             transform="matrix(0 .9979 -.9995 0 318.448 126.105)"
    //         />
    //         <path
    //             style={{
    //                 strokeWidth: ".580755px",
    //                 fill: "url(#b)",
    //                 strokeLinejoin: "round",
    //             }}
    //             d="M57.642 174.756h13.181v11.556H57.642z"
    //             transform="matrix(0 .9979 -.9995 0 318.448 126.105)"
    //         />
    //         <path
    //             style={{
    //                 strokeWidth: ".580755px",
    //                 fill: "url(#c)",
    //                 strokeLinejoin: "round",
    //             }}
    //             d="M70.812 174.752h10.762v11.609H70.812z"
    //             transform="matrix(0 .9979 -.9995 0 318.448 126.105)"
    //         />
    //     </g>
    //     <rect
    //         x={21.507}
    //         y={60.933}
    //         width={77.985}
    //         height={137.476}
    //         style={{
    //             fill: "none",
    //             stroke: "#000",
    //             strokeWidth: "1.0013px",
    //             strokeLinejoin: "round",
    //         }}
    //         rx={1.422}
    //         ry={1.422}
    //         transform="matrix(.00005 1 -1 0 225.968 161.683)"
    //     />
    //     <circle
    //         style={{
    //             fill: "url(#b)",
    //             strokeLinejoin: "round",
    //         }}
    //         cx={-80.356}
    //         cy={-268.53}
    //         transform="rotate(90 -222.183 96.3)"
    //         r={10}
    //     />
    //     <text
    //         style={{
    //             whiteSpace: "pre",
    //             fill: "#ea0707",
    //             fontFamily: "Arial,sans-serif",
    //             fontSize: "16.3px",
    //         }}
    //         y={-80.356}
    //         x={-268.53}
    //     >
    //         {"asadflksaldfh;sajdkfskjfajk;shbfkjhasu"}
    //     </text>
    //     <circle
    //         style={{
    //             fill: "url(#b)",
    //             strokeLinejoin: "round",
    //         }}
    //         cx={-80.61}
    //         cy={-237.816}
    //         transform="rotate(90 -222.183 96.3)"
    //         r={10}
    //     />
    //     <circle
    //         style={{
    //             fill: "url(#b)",
    //             strokeLinejoin: "round",
    //         }}
    //         cx={-80.618}
    //         cy={-207.038}
    //         transform="rotate(90 -222.183 96.3)"
    //         r={10}
    //     />
    //     <circle
    //         style={{
    //             fill: "url(#b)",
    //             strokeLinejoin: "round",
    //         }}
    //         cx={-80.647}
    //         cy={-176.322}
    //         transform="rotate(90 -222.183 96.3)"
    //         r={10}
    //     />
    //     <path
    //         style={{
    //             fill: "none",
    //             strokeWidth: "1.35px",
    //             stroke: "url(#d)",
    //             strokeLinejoin: "round",
    //         }}
    //         transform="rotate(90 96.302 217.382)"
    //         d="M96.302 285.666V149.099"
    //     />
    //     <path
    //         style={{
    //             fill: "url(#e)",
    //             strokeLinejoin: "round",
    //         }}
    //         transform="rotate(90 -222.183 96.3)"
    //         d="M-115.999-272.362h14.235v2.716h-14.235zM-115.949-290.447h14.179v1.88h-14.179zM-116.002-258.226h14.235v2.716h-14.235zM-116.002-244.204h14.235v2.716h-14.235zM-115.975-230.224h14.212v2.716h-14.212zM-115.954-216.014h14.189v2.716h-14.189zM-116.009-201.974h14.235v2.716h-14.235zM-115.994-187.806h14.235v2.716h-14.235zM-115.982-173.758h14.235v2.716h-14.235zM-115.963-155.327h14.191v1.475h-14.191z"
    //     />
    //     <path
    //         style={{
    //             strokeWidth: ".580755px",
    //             fill: "none",
    //             stroke: "url(#f)",
    //             strokeLinejoin: "round",
    //         }}
    //         transform="rotate(90 152.008 196.896)"
    //         d="m146.6 196.885 10.816.022M146.6 196.885l10.816.022"
    //     />
    //     <path
    //         style={{
    //             strokeWidth: ".580755px",
    //             fill: "none",
    //             stroke: "url(#f)",
    //             strokeLinejoin: "round",
    //         }}
    //         transform="rotate(90 123.9 196.896)"
    //         d="m118.492 196.885 10.816.022"
    //     />
    //     <path
    //         style={{
    //             strokeWidth: ".580755px",
    //             fill: "none",
    //             stroke: "url(#f)",
    //             strokeLinejoin: "round",
    //         }}
    //         transform="rotate(90 109.861 196.896)"
    //         d="m104.453 196.885 10.816.022"
    //     />
    //     <path
    //         style={{
    //             strokeWidth: ".580755px",
    //             fill: "none",
    //             stroke: "url(#f)",
    //             strokeLinejoin: "round",
    //         }}
    //         transform="rotate(90 81.843 196.896)"
    //         d="m76.435 196.885 10.816.022"
    //     />
    //     <path
    //         style={{
    //             strokeWidth: ".580755px",
    //             fill: "none",
    //             stroke: "url(#f)",
    //             strokeLinejoin: "round",
    //         }}
    //         transform="rotate(90 67.654 196.896)"
    //         d="m62.246 196.885 10.816.022"
    //     />
    //     <path
    //         style={{
    //             strokeWidth: ".580755px",
    //             fill: "none",
    //             stroke: "url(#f)",
    //             strokeLinejoin: "round",
    //         }}
    //         transform="rotate(90 39.576 196.896)"
    //         d="m34.168 196.885 10.816.022M34.168 196.885l10.816.022"
    //     />
    // </svg>
    <svg
        viewBox="27.56 183.19 137.48 77.985"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <defs>
            <linearGradient
                id="a"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(.99262 0 0 .99455 .506 -25.748)"
            >
                <title>{"Darkest Grey"}</title>
                <stop
                    style={{
                        stopColor: "#262626",
                    }}
                />
            </linearGradient>
            <linearGradient
                id="b"
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
            <linearGradient
                id="c"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1 0 0 1.00317 -.07 -85.385)"
            >
                <title>{"Darkgray"}</title>
                <stop
                    style={{
                        stopColor: "#555",
                    }}
                />
            </linearGradient>
            <linearGradient
                id="d"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1.01439 0 0 1.04403 18.742 -53.682)"
            >
                <title>{"Team Color"}</title>
                <stop
                    style={{
                        stopColor: "#0048a7",
                    }}
                />
            </linearGradient>
            <linearGradient
                id="e"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(.9775 0 0 .56506 -1923.815 -4245.838)"
            >
                <title>{"Lightest grey"}</title>
                <stop
                    style={{
                        stopColor: "#eee",
                    }}
                />
            </linearGradient>
            <linearGradient
                id="f"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(.98332 0 0 .99602 214.698 -75.198)"
            >
                <title>{"Lighter gray"}</title>
                <stop
                    style={{
                        stopColor: "#bfbfbf",
                    }}
                />
            </linearGradient>
        </defs>
        <g>
            <path
                style={{
                    strokeWidth: ".580755px",
                    fill: "url(#a)",
                    strokeLinejoin: "round",
                }}
                d="M57.679 201.472h23.122v15.356H57.679z"
                transform="matrix(0 .9979 -.9995 0 318.448 126.105)"
            />
            <path
                style={{
                    strokeWidth: ".580755px",
                    fill: "url(#b)",
                    strokeLinejoin: "round",
                }}
                d="M57.711 259.202h13.181v11.44H57.711z"
                transform="matrix(0 .9979 -.9995 0 318.448 126.105)"
            />
            <path
                style={{
                    strokeWidth: ".580755px",
                    fill: "url(#c)",
                    strokeLinejoin: "round",
                }}
                d="M70.715 259.179h10.762v11.601H70.715z"
                transform="matrix(0 .9979 -.9995 0 318.448 126.105)"
            />
            <path
                style={{
                    strokeWidth: ".580755px",
                    fill: "url(#d)",
                    strokeLinejoin: "round",
                }}
                d="M57.719 243.899h23.044v15.371H57.719zM57.571 270.612h23.326v20.004H57.571zM57.662 186.256H80.78v15.242H57.662zM57.419 153.744h23.637v21.138H57.419z"
                transform="matrix(0 .9979 -.9995 0 318.448 126.105)"
            />
            <path
                style={{
                    strokeWidth: ".580755px",
                    fill: "url(#a)",
                    strokeLinejoin: "round",
                }}
                d="M57.722 228.439H80.76v15.481H57.722z"
                transform="matrix(0 .9979 -.9995 0 318.448 126.105)"
            />
            <path
                style={{
                    strokeWidth: ".580755px",
                    fill: "url(#b)",
                    strokeLinejoin: "round",
                }}
                d="M57.718 216.808h13.181v11.681H57.718z"
                transform="matrix(0 .9979 -.9995 0 318.448 126.105)"
            />
            <path
                style={{
                    strokeWidth: ".580755px",
                    fill: "url(#c)",
                    strokeLinejoin: "round",
                }}
                d="M70.888 216.791H81.65v11.707H70.888z"
                transform="matrix(0 .9979 -.9995 0 318.448 126.105)"
            />
            <path
                style={{
                    strokeWidth: ".580755px",
                    fill: "url(#b)",
                    strokeLinejoin: "round",
                }}
                d="M57.642 174.756h13.181v11.556H57.642z"
                transform="matrix(0 .9979 -.9995 0 318.448 126.105)"
            />
            <path
                style={{
                    strokeWidth: ".580755px",
                    fill: "url(#c)",
                    strokeLinejoin: "round",
                }}
                d="M70.812 174.752h10.762v11.609H70.812z"
                transform="matrix(0 .9979 -.9995 0 318.448 126.105)"
            />
        </g>
        <rect
            x={21.507}
            y={60.933}
            width={77.985}
            height={137.476}
            style={{
                fill: "none",
                stroke: "#000",
                strokeWidth: "1.0013px",
                strokeLinejoin: "round",
            }}
            rx={1.422}
            ry={1.422}
            transform="matrix(.00005 1 -1 0 225.968 161.683)"
        />
        <circle
            style={{
                fill: "url(#b)",
                strokeLinejoin: "round",
            }}
            cx={-80.356}
            cy={-268.53}
            transform="rotate(90 -222.183 96.3)"
            r={10}
        />
        <circle
            style={{
                fill: "url(#b)",
                strokeLinejoin: "round",
            }}
            cx={-80.61}
            cy={-237.816}
            transform="rotate(90 -222.183 96.3)"
            r={10}
        />
        <circle
            style={{
                fill: "url(#b)",
                strokeLinejoin: "round",
            }}
            cx={-80.618}
            cy={-207.038}
            transform="rotate(90 -222.183 96.3)"
            r={10}
        />
        <circle
            style={{
                fill: "url(#b)",
                strokeLinejoin: "round",
            }}
            cx={-80.647}
            cy={-176.322}
            transform="rotate(90 -222.183 96.3)"
            r={10}
        />
        <path
            style={{
                fill: "none",
                strokeWidth: "1.35px",
                stroke: "url(#d)",
                strokeLinejoin: "round",
            }}
            transform="rotate(90 96.302 217.382)"
            d="M96.302 285.666V149.099"
        />
        <path
            style={{
                fill: "url(#e)",
                strokeLinejoin: "round",
            }}
            transform="rotate(90 -222.183 96.3)"
            d="M-115.999-272.362h14.235v2.716h-14.235zM-115.949-290.447h14.179v1.88h-14.179zM-116.002-258.226h14.235v2.716h-14.235zM-116.002-244.204h14.235v2.716h-14.235zM-115.975-230.224h14.212v2.716h-14.212zM-115.954-216.014h14.189v2.716h-14.189zM-116.009-201.974h14.235v2.716h-14.235zM-115.994-187.806h14.235v2.716h-14.235zM-115.982-173.758h14.235v2.716h-14.235zM-115.963-155.327h14.191v1.475h-14.191z"
        />
        <path
            style={{
                strokeWidth: ".580755px",
                fill: "none",
                stroke: "url(#f)",
                strokeLinejoin: "round",
            }}
            transform="rotate(90 152.008 196.896)"
            d="m146.6 196.885 10.816.022M146.6 196.885l10.816.022"
        />
        <path
            style={{
                strokeWidth: ".580755px",
                fill: "none",
                stroke: "url(#f)",
                strokeLinejoin: "round",
            }}
            transform="rotate(90 123.9 196.896)"
            d="m118.492 196.885 10.816.022"
        />
        <path
            style={{
                strokeWidth: ".580755px",
                fill: "none",
                stroke: "url(#f)",
                strokeLinejoin: "round",
            }}
            transform="rotate(90 109.861 196.896)"
            d="m104.453 196.885 10.816.022"
        />
        <path
            style={{
                strokeWidth: ".580755px",
                fill: "none",
                stroke: "url(#f)",
                strokeLinejoin: "round",
            }}
            transform="rotate(90 81.843 196.896)"
            d="m76.435 196.885 10.816.022"
        />
        <path
            style={{
                strokeWidth: ".580755px",
                fill: "none",
                stroke: "url(#f)",
                strokeLinejoin: "round",
            }}
            transform="rotate(90 67.654 196.896)"
            d="m62.246 196.885 10.816.022"
        />
        <path
            style={{
                strokeWidth: ".580755px",
                fill: "none",
                stroke: "url(#f)",
                strokeLinejoin: "round",
            }}
            transform="rotate(90 39.576 196.896)"
            d="m34.168 196.885 10.816.022M34.168 196.885l10.816.022"
        />
        {props.numberLocations && props.numberLocations.map((num, index) => {

            return (<text
                style={{
                    whiteSpace: "pre",
                    fill: num.height === "fail" ? "#ff4b4b" : CurrentTheme().palette.text.primary,
                    fontFamily: "Arial,sans-serif",
                    fontSize: "6.9px",
                    stroke: "#FFFFFF",
                    strokeWidth: 0.1,
                }}
                x={possibleNumberLocations[num.type][num.id].y}
                y={num.type === "pickup" ? possibleNumberLocations[num.type][num.id].x : num.height != undefined ? placementPositionsY[num.type][num.height] : placementPositionsY[num.type]["hybrid"]}
                key={num.type + index}
            >
                {index + 1}
            </text>)

        })}
    </svg>
)}

export default AutoFieldHorizontalSVG
