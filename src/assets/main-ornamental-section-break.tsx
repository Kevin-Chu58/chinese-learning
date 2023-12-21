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
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="240.000000pt"
                    viewBox="0 0 300.000000 75.000000"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <metadata>
                        Created by potrace 1.10, written by Peter Selinger
                        2001-2011
                    </metadata>
                    <g
                        transform="translate(0.000000,75.000000) scale(0.100000,-0.100000)"
                        fill={color}
                        stroke="none"
                    >
                        <path
                            d="M2712 644 c-102 -52 -71 -214 42 -214 52 0 93 60 74 109 -11 30 -30
                        17 -22 -15 14 -55 -71 -88 -112 -43 -24 27 -25 91 0 118 49 54 131 47 185 -14
                        94 -107 23 -292 -139 -362 -38 -16 -131 -21 -169 -8 -21 6 -22 9 -10 19 50 38
                        62 97 28 140 -26 33 -68 34 -105 2 -35 -30 -38 -82 -6 -125 l22 -30 -73 -16
                        c-64 -14 -187 -15 -1082 -13 -989 3 -1011 3 -1044 23 -53 31 -76 69 -76 125 0
                        40 5 54 29 79 55 57 143 50 173 -15 15 -30 15 -35 -1 -58 -28 -44 -92 -27 -84
                        23 4 25 -16 31 -20 7 -7 -32 7 -62 33 -74 35 -16 39 -16 74 14 44 37 43 84 -3
                        130 -29 29 -41 34 -82 34 -95 0 -150 -60 -142 -155 5 -59 34 -107 79 -131 61
                        -31 201 -35 1160 -32 921 3 956 4 1019 23 58 18 69 19 105 7 57 -20 149 -10
                        211 21 58 29 126 99 150 154 39 89 12 215 -57 264 -41 29 -113 35 -157 13z
                        m-151 -274 c27 -15 26 -76 -3 -107 -29 -31 -44 -29 -63 7 -20 39 -19 66 5 90
                        23 23 33 24 61 10z"
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
                    viewBox="0 0 300.000000 75.000000"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <metadata>
                        Created by potrace 1.10, written by Peter Selinger
                        2001-2011
                    </metadata>
                    <g
                        transform="translate(0.000000,75.000000) scale(0.100000,-0.100000)"
                        fill={color}
                        stroke="none"
                    >
                        <path
                            d="M165 646 c-127 -55 -136 -255 -18 -373 77 -77 209 -112 299 -81 28
                        10 48 12 65 5 89 -34 164 -36 1099 -36 509 0 960 4 1002 8 42 5 94 17 115 28
                        72 37 103 133 67 209 -53 111 -243 93 -244 -24 0 -45 13 -67 50 -82 28 -11 34
                        -11 58 7 19 14 27 29 27 52 0 17 -4 30 -10 29 -5 -2 -9 -10 -8 -18 5 -48 -53
                        -68 -81 -28 -22 31 -20 52 7 83 49 58 151 35 183 -42 13 -30 14 -44 3 -80 -15
                        -55 -54 -88 -119 -102 -35 -8 -362 -11 -1031 -11 -858 0 -989 2 -1050 16 l-69
                        16 20 28 c44 62 9 150 -59 150 -70 0 -96 -91 -42 -149 28 -30 28 -31 7 -37
                        -11 -4 -46 -7 -77 -7 -144 2 -269 122 -269 261 0 61 17 99 59 135 63 53 148
                        40 176 -27 26 -63 -7 -116 -74 -116 -35 0 -56 28 -48 66 6 31 -9 41 -22 15
                        -17 -31 -13 -51 18 -82 41 -41 83 -39 127 5 98 98 -29 240 -161 182z m339
                        -287 c30 -24 33 -49 9 -90 -22 -37 -35 -37 -67 2 -31 37 -33 62 -6 89 25 25
                        31 25 64 -1z"
                        />
                    </g>
                </svg>
            </div>
            <div
                style={{
                    fontSize: "20px",
                    fontFamily: "微軟正黑體",
                    margin: "auto 0",
                    color: color,
                }}
            >
                {subtitle}
            </div>
        </div>
    );
};

export default MainOramentalSectionBreak;
