import { PropsWithChildren } from "react";
import React from "react";

type Props = {
    color: string;
    subtitle?: string;
};

const MainOramentalSectionBreak = ({
    color,
    children,
    subtitle = "",
}: PropsWithChildren<Props>) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <div style={{ display: "flex", justifyContent: "center" }}>
                <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="240.000000pt"
                    viewBox="0 0 900.000000 273.000000"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <metadata>
                        Created by potrace 1.10, written by Peter Selinger
                        2001-2011
                    </metadata>
                    <g
                        transform="translate(0.000000,273.000000) scale(0.100000,-0.100000)"
                        fill={color}
                        stroke="none"
                    >
                        <path
                            d="M930 1561 c-72 -39 -130 -125 -130 -195 0 -56 32 -126 76 -165 91
                            -80 209 -76 297 11 26 26 47 54 47 62 0 8 7 22 16 30 14 15 371 16 3778 16
                            l3763 0 19 21 c14 15 16 24 7 37 -9 16 -254 17 -3789 22 -2078 3 -3780 6
                            -3781 8 -1 1 -6 17 -13 36 -35 108 -189 170 -290 117z"
                        />
                    </g>
                </svg>
                <div
                    style={{
                        fontSize: "40px",
                        fontFamily: "微軟正黑體",
                        margin: "auto 0",
                        color: color,
                    }}
                >
                    {children}
                </div>
                <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="240.000000pt"
                    viewBox="0 0 900.000000 273.000000"
                    preserveAspectRatio="xMidYMid meet"
                    style={{rotate: "180deg"}}
                >
                    <metadata>
                        Created by potrace 1.10, written by Peter Selinger
                        2001-2011
                    </metadata>
                    <g
                        transform="translate(0.000000,273.000000) scale(0.100000,-0.100000)"
                        fill={color}
                        stroke="none"
                    >
                        <path
                            d="M930 1561 c-72 -39 -130 -125 -130 -195 0 -56 32 -126 76 -165 91
                            -80 209 -76 297 11 26 26 47 54 47 62 0 8 7 22 16 30 14 15 371 16 3778 16
                            l3763 0 19 21 c14 15 16 24 7 37 -9 16 -254 17 -3789 22 -2078 3 -3780 6
                            -3781 8 -1 1 -6 17 -13 36 -35 108 -189 170 -290 117z"
                        />
                    </g>
                </svg>
            </div>
            <div
                style={{
                    fontSize: "20px",
                    fontFamily: "微軟正黑體",
                    marginTop: "-10px",
                    color: color,
                }}
            >
                {subtitle}
            </div>
        </div>
    );
};

export default MainOramentalSectionBreak;
