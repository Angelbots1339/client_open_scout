import * as React from "react"
import {SVGProps} from "react"
import {CurrentTheme} from "../../../../pages/_app";
import {AutoPositionsI} from "../../../../pages/dashboard/scouting";


interface AutoFieldProps extends SVGProps<SVGSVGElement> {

    numberLocations?: AutoPositionsI[]
}

const AutoFieldSVG = (props: AutoFieldProps) => {

    const possibleNumberLocations = {
        "cube": [
            {x: 84, y: 167},
            {x: 84, y: 197},
            {x: 84, y: 211},
            {x: 84, y: 239},
            {x: 84, y: 254},
            {x: 84, y: 284},
        ],
        "cone": [
            {x: 84, y: 183},
            {x: 84, y: 225},
            {x: 84, y: 267},
        ],
        "pickup": [
            {x: 110, y: 178},
            {x: 110, y: 209},
            {x: 110, y: 240},
            {x: 110, y: 270}
        ]
    }

    const placementPositionsX = {
        "cube": {
            "top": 60,
            "mid": 70,
            "hybrid": 84,
            "fail": 93,
        },
        "cone": {
            "top": 60,
            "mid": 70,
            "hybrid": 84,
            "fail": 93,
        }
    }

    return (
            <svg
                viewBox="57.308 153.352 77.911 137.57"
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
                        gradientTransform="matrix(.99371 0 0 1.00858 -486.672 -88.353)"
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
                        gradientTransform="matrix(1.01652 0 0 1.04455 13.747 -48.943)"
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
                        gradientTransform="matrix(.99828 0 0 .56788 -.034 198.449)"
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
                        gradientTransform="translate(14.758 132.046)"
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
                        transform="matrix(.9979 0 0 .9995 .222 .035)"

                    />
                    <path
                        style={{
                            strokeWidth: ".580755px",
                            fill: "url(#b)",
                            strokeLinejoin: "round",
                        }}
                        d="M57.711 259.202h13.181v11.44H57.711z"
                        transform="matrix(.9979 0 0 .9995 .222 .035)"
                    />
                    <path
                        style={{
                            strokeWidth: ".580755px",
                            fill: "url(#c)",
                            strokeLinejoin: "round",
                        }}
                        d="M70.715 259.179h10.762v11.601H70.715z"
                        transform="matrix(.9979 0 0 .9995 .222 .035)"
                    />
                    <path
                        style={{
                            strokeWidth: ".580755px",
                            fill: "url(#d)",
                            strokeLinejoin: "round",
                        }}
                        d="M57.719 243.899h23.044v15.371H57.719zM57.571 270.612h23.326v20.004H57.571zM57.662 186.256H80.78v15.242H57.662zM57.419 153.744h23.637v21.138H57.419z"
                        transform="matrix(.9979 0 0 .9995 .222 .035)"
                    />
                    <path
                        style={{
                            strokeWidth: ".580755px",
                            fill: "url(#a)",
                            strokeLinejoin: "round",
                        }}
                        d="M57.722 228.439H80.76v15.481H57.722z"
                        transform="matrix(.9979 0 0 .9995 .222 .035)"
                    />
                    <path
                        style={{
                            strokeWidth: ".580755px",
                            fill: "url(#b)",
                            strokeLinejoin: "round",
                        }}
                        d="M57.718 216.808h13.181v11.681H57.718z"
                        transform="matrix(.9979 0 0 .9995 .222 .035)"
                    />
                    <path
                        style={{
                            strokeWidth: ".580755px",
                            fill: "url(#c)",
                            strokeLinejoin: "round",
                        }}
                        d="M70.888 216.791H81.65v11.707H70.888z"
                        transform="matrix(.9979 0 0 .9995 .222 .035)"
                    />
                    <path
                        style={{
                            strokeWidth: ".580755px",
                            fill: "url(#b)",
                            strokeLinejoin: "round",
                        }}
                        d="M57.642 174.756h13.181v11.556H57.642z"
                        transform="matrix(.9979 0 0 .9995 .222 .035)"
                    />
                    <path
                        style={{
                            strokeWidth: ".580755px",
                            fill: "url(#c)",
                            strokeLinejoin: "round",
                        }}
                        d="M70.812 174.752h10.762v11.609H70.812z"
                        transform="matrix(.9979 0 0 .9995 .222 .035)"
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
                    transform="matrix(1 -.00005 0 1 35.8 92.515)"
                />
                <circle
                    style={{
                        fill: "url(#b)",
                        strokeLinejoin: "round",
                    }}
                    cx={112.245}
                    cy={175.835}
                    r={10}
                />
                <circle
                    style={{
                        fill: "url(#b)",
                        strokeLinejoin: "round",
                    }}
                    cx={111.991}
                    cy={206.549}
                    r={10}
                />
                <circle
                    style={{
                        fill: "url(#b)",
                        strokeLinejoin: "round",
                    }}
                    cx={111.983}
                    cy={237.327}
                    r={10}
                />
                <circle
                    style={{
                        fill: "url(#b)",
                        strokeLinejoin: "round",
                    }}
                    cx={111.954}
                    cy={268.043}
                    r={10}
                />
                <path
                    style={{
                        fill: "none",
                        strokeWidth: "1.35px",
                        stroke: "url(#d)",
                        strokeLinejoin: "round",
                    }}
                    transform="matrix(.9979 0 0 .9995 .222 .035)"
                    d="M91.47 290.573V153.938"
                />
                <path
                    style={{
                        fill: "url(#e)",
                        strokeLinejoin: "round",
                    }}
                    transform="matrix(.9979 0 0 .9995 .222 .035)"
                    d="M76.54 172.054h14.265v2.717H76.54zM76.59 153.96h14.209v1.881H76.59zM76.537 186.197h14.265v2.717H76.537zM76.537 200.226h14.265v2.717H76.537zM76.564 214.213h14.242v2.717H76.564zM76.585 228.43h14.219v2.717H76.585zM76.53 242.477h14.265v2.717H76.53zM76.545 256.652H90.81v2.717H76.545zM76.557 270.707h14.265v2.717H76.557zM76.576 289.147h14.221v1.476H76.576z"
                />
                <path
                    style={{
                        strokeWidth: ".580755px",
                        fill: "none",
                        stroke: "url(#f)",
                        strokeLinejoin: "round",
                    }}
                    transform="matrix(.9979 0 0 .9995 .222 .035)"
                    d="m65.521 166.512 10.839.022M65.521 166.512l10.839.022M65.521 194.634l10.839.022M65.521 208.68l10.839.022M65.521 236.712l10.839.022M65.521 250.908l10.839.022M65.521 279l10.839.022M65.521 279l10.839.022"
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
                        x={num.type === "pickup" ? possibleNumberLocations[num.type][num.id].x : num.height != undefined ? placementPositionsX[num.type][num.height] : placementPositionsX[num.type]["hybrid"]}
                        y={possibleNumberLocations[num.type][num.id].y}
                        key={num.type + index}
                    >
                        {index + 1}
                    </text>)

                })}
            </svg>
    )
}

export default AutoFieldSVG
