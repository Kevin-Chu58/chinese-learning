import { PropsWithChildren, useEffect, useState } from "react";
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
    const [svgWidth, setSvgWidth] = useState(240);
    const [headerFontSize, setHeaderFontSize] = useState(40);

    const osbResize = (width: number) => {
        if (width >= 1100) {
            setSvgWidth(200);
            setHeaderFontSize(40);
        } else if (width >= 800) {
            setSvgWidth(180);
            setHeaderFontSize(32);
        } else if (width >= 700) {
            setSvgWidth(160);
            setHeaderFontSize(32);
        } else if (width >= 500) {
            setSvgWidth(120);
            setHeaderFontSize(30);
        } else if (width >= 380) {
            setSvgWidth(80);
            setHeaderFontSize(28);
        } else if (width >= 0) {
            setSvgWidth(70);
            setHeaderFontSize(26);
        }
    };

    useEffect(() => {
        osbResize(window.innerWidth);
    }, [window.innerWidth]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "30px",
            }}
        >
            <div style={{ display: "flex", justifyContent: "center" }}>
                <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width={`${svgWidth}pt`}
                    viewBox="0 0 245.000000 121.000000"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <metadata>
                        Created by potrace 1.10, written by Peter Selinger
                        2001-2011
                    </metadata>
                    <g
                        transform="translate(0.000000,121.000000) scale(0.050000,-0.050000)"
                        fill={color}
                        stroke="none"
                    >
                        <path
                            d="M1451 2367 c-324 -100 -503 -417 -400 -706 40 -110 27 -155 -24 -83
                            -202 289 -822 -114 -627 -408 51 -77 51 -110 -1 -110 -221 0 -419 -393 -294
                            -582 95 -143 262 -186 585 -149 134 15 150 12 358 -66 401 -152 599 -124 713
                            98 162 319 -172 696 -529 597 -247 -69 -236 -371 13 -355 115 8 155 -30 53
                            -50 -324 -65 -420 344 -104 448 332 110 691 -164 660 -504 -10 -110 -8 -117
                            33 -117 98 0 202 -48 304 -141 253 -229 402 -246 655 -73 185 127 247 154 346
                            154 84 0 188 -88 150 -126 -17 -17 -30 -11 -53 22 -45 64 -229 59 -229 -6 0
                            -86 294 -138 420 -75 84 42 148 144 100 160 -200 69 -242 409 -61 485 70 29
                            181 -3 181 -52 0 -32 -32 -37 -50 -8 -55 89 -200 -22 -200 -154 0 -307 446
                            -341 697 -53 170 196 331 232 512 116 64 -40 134 -69 170 -69 l61 0 -66 52
                            c-36 29 -85 92 -107 141 -53 112 -96 135 -225 118 -259 -33 -352 -36 -384 -9
                            -47 39 -157 -84 -139 -154 8 -34 3 -48 -16 -48 -69 0 -44 153 35 219 112 93
                            113 241 2 338 -157 138 -309 122 -460 -48 -88 -99 -111 -114 -190 -123 l-90
                            -10 0 -105 c0 -367 -624 -507 -926 -208 -78 78 -107 137 -66 137 9 0 41 -31
                            69 -68 242 -317 846 -203 873 164 l10 134 93 6 c415 27 256 726 -168 738 -90
                            2 -156 15 -189 37 -126 82 -285 73 -386 -22 -48 -45 -50 -56 -48 -275 3 -291
                            49 -370 234 -405 265 -49 400 245 173 378 -112 67 -252 25 -162 -48 44 -36 57
                            -79 24 -79 -119 0 -144 183 -30 212 257 65 454 -302 246 -457 -156 -116 -517
                            -21 -517 136 0 46 -26 34 -84 -39 -194 -243 -645 -261 -719 -29 -18 59 -40 89
                            -67 93 -228 35 -264 341 -54 459 142 80 335 43 411 -79 39 -63 -5 -62 -77 1
                            -179 158 -469 14 -409 -202 23 -84 46 -106 137 -129 73 -19 92 -42 111 -131
                            50 -239 549 -128 696 155 107 204 -31 524 -208 485 -15 -3 -30 29 -39 87 -46
                            303 -394 487 -727 385z"
                        />
                    </g>
                </svg>
                <div
                    style={{
                        fontSize: `${headerFontSize}px`,
                        fontWeight: "bold",
                        fontFamily: "微軟正黑體",
                        margin: "auto 0",
                        width: `${headerFontSize * 4}px`,
                        color: color,
                    }}
                >
                    {children}
                </div>
                <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width={`${svgWidth}pt`}
                    viewBox="0 0 262.000000 128.000000"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <metadata>
                        Created by potrace 1.10, written by Peter Selinger
                        2001-2011
                    </metadata>
                    <g
                        transform="translate(0.000000,128.000000) scale(0.050000,-0.050000)"
                        fill={color}
                        stroke="none"
                    >
                        <path
                            d="M3675 2471 c-363 -129 -596 -397 -875 -1007 -76 -168 -175 -367 -219
                            -442 -443 -759 -1118 -964 -1571 -477 -64 69 -153 164 -197 212 -181 193 -454
                            256 -664 154 -123 -61 -134 -81 -28 -51 233 67 426 -29 670 -332 312 -388 576
                            -520 937 -470 510 71 879 408 1429 1307 382 625 582 788 946 772 375 -17 549
                            -397 275 -602 -59 -43 -219 -57 -233 -20 -5 17 13 25 53 25 194 0 162 226 -39
                            280 -287 78 -504 -214 -312 -419 68 -73 90 -114 102 -190 20 -136 26 -146 103
                            -172 127 -42 244 -29 325 36 128 102 154 110 310 93 383 -44 622 183 491 466
                            -34 74 -47 153 -58 341 -13 216 -21 254 -66 323 -101 151 -379 238 -554 172
                            -144 -55 -202 -56 -416 -12 -232 48 -305 51 -409 13z"
                        />
                        <path
                            d="M1981 2255 c-27 -14 -72 -65 -101 -115 -35 -60 -83 -107 -145 -140
                            -167 -92 -211 -182 -163 -335 27 -84 30 -126 15 -193 -44 -192 119 -291 313
                            -192 44 22 135 48 203 57 165 23 243 117 209 253 -36 144 -352 131 -352 -15 0
                            -22 -11 -35 -25 -30 -79 26 7 163 122 194 220 59 392 -137 280 -319 -30 -48
                            -46 -111 -50 -200 -27 -540 -470 -904 -863 -708 -70 35 -157 109 -269 232
                            -211 231 -301 280 -540 292 -121 6 -175 2 -175 -14 0 -12 20 -22 45 -22 93 0
                            283 -112 393 -232 349 -382 410 -418 703 -418 419 0 827 360 1083 955 108 250
                            103 316 -37 488 -37 46 -84 124 -105 172 -103 241 -363 380 -541 290z"
                        />
                        <path
                            d="M3930 2072 c-276 -68 -400 -201 -807 -862 -351 -572 -638 -890 -965
                            -1070 -131 -72 -117 -76 41 -12 275 112 513 305 791 642 206 251 512 545 635
                            609 92 49 93 51 82 132 -26 190 152 369 367 369 156 0 303 -101 311 -215 5
                            -64 51 -17 67 68 28 150 -96 307 -272 345 -120 26 -121 26 -250 -6z"
                        />
                        <path
                            d="M2145 1286 l-65 -9 0 -123 c0 -419 -360 -697 -686 -531 -62 32 -77
                            34 -57 11 199 -240 652 -102 812 247 69 152 119 425 76 416 -8 -2 -44 -7 -80
                            -11z"
                        />
                    </g>
                </svg>
            </div>
            <div
                style={{
                    fontSize: "20px",
                    fontFamily: "微軟正黑體",
                    color: color,
                }}
            >
                {subtitle}
            </div>
        </div>
    );
};

export default MainOramentalSectionBreak;
