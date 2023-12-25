import { PropsWithChildren } from "react";
import React from "react";

type Props = {
    color: string;
};

const StarOramentalSectionBreakShort = ({
    color,
}: PropsWithChildren<Props>) => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="80.000000pt"
                viewBox="0 0 227.000000 115.000000"
                preserveAspectRatio="xMidYMid meet"
                style={{margin: "20px"}}
            >
                <metadata>
                    Created by potrace 1.10, written by Peter Selinger 2001-2011
                </metadata>
                <g
                    transform="translate(0.000000,115.000000) scale(0.050000,-0.050000)"
                    fill={color}
                    stroke="none"
                >
                    <path
                        d="M2253 1888 c-46 -331 -360 -651 -734 -746 l-144 -36 98 -13 c344 -46
                        725 -412 779 -749 17 -107 39 -107 56 0 55 344 441 708 793 750 l109 13 -140
                        28 c-373 75 -716 414 -763 753 -7 51 -19 92 -27 92 -8 0 -20 -41 -27 -92z"
                    />
                    <path
                        d="M681 1529 c-5 -148 -165 -329 -348 -392 -56 -20 -85 -36 -63 -37 150
                        -3 329 -160 391 -343 l34 -99 12 78 c25 155 204 332 362 358 l79 12 -99 29
                        c-175 51 -295 172 -341 341 -14 52 -26 76 -27 53z"
                    />
                    <path
                        d="M3853 1484 c-24 -152 -152 -283 -336 -345 l-99 -34 76 -12 c155 -25
                        334 -203 359 -357 l12 -78 34 99 c62 183 239 338 391 344 22 1 2 13 -44 28
                        -184 58 -287 157 -348 337 l-33 96 -12 -78z"
                    />
                </g>
            </svg>
        </div>
    );
};

export default StarOramentalSectionBreakShort;
