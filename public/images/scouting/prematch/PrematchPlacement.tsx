import * as React from "react"
import {SVGProps} from "react"


const PrematchPlacementSVG = (props: SVGProps<SVGSVGElement>) => {

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
                    fill: "url(#a)",
                    strokeLinejoin: "round",
                }}
                cx={-80.356}
                cy={-268.53}
                transform="rotate(90 -222.183 96.3)"
                r={10}
            />
            <image
                x={-80.356}
                y={-268.53}
                width={50}
                height={50}
                href={"./../teleop/CubeRotoscoped.png"}
            />
            <circle
                style={{
                    fill: "url(#a)",
                    strokeLinejoin: "round",
                }}
                cx={-80.61}
                cy={-237.816}
                transform="rotate(90 -222.183 96.3)"
                r={10}
            />
            <circle
                style={{
                    fill: "url(#a)",
                    strokeLinejoin: "round",
                }}
                cx={-80.618}
                cy={-207.038}
                transform="rotate(90 -222.183 96.3)"
                r={10}
            />
            <circle
                style={{
                    fill: "url(#a)",
                    strokeLinejoin: "round",
                }}
                cx={-80.647}
                cy={-176.322}
                transform="rotate(90 -222.183 96.3)"
                r={10}
            />
        </svg>
    )
}

export default PrematchPlacementSVG;
