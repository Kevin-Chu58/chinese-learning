import { PropsWithChildren } from "react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./style.css";
import Photo from "../Photo";
import ShortStickyTape from "./../../assets/images/short-sticky-tape.svg";
import PostalStampChina from "./../../assets/postal-stamp-china.tsx";
import PostalStampReceived from "./../../assets/postal-stamp-received.tsx";
import PostalStampAirmail from "./../../assets/postal-stamp-airmail.tsx";
import { stepContentClasses } from "@mui/material";

type Props = {
    rotateDeg?: number;
    background?: string;    // available options (set in scss): old [default], vintage
    title?: string;
    context?: string;
    commenter?: string;
    buttonContext?: string;
    hasButton?: boolean;
    hasImage?: boolean;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    chinaStampColor?: string;
    receivedStampColor?: string;
    airmailStampColor?: string;
};

const Postcard = ({
    rotateDeg = 0,
    background = "none",
    title = "",
    context = "",
    commenter = "",
    buttonContext = "让我康康",
    hasButton = true,
    hasImage = true,
    left = 0,
    right = 0,
    top = 0,
    bottom = 0,
    chinaStampColor = "",
    receivedStampColor = "",
    airmailStampColor = "",
}: PropsWithChildren<Props>) => {
    const navigate = useNavigate();

    const setColor = (color: string) => {

    switch (color) {
        case "red":
            return "#cd3736";
        case "green":
            return "#3f5e4499";
        case "blue":
            return "#187cac99";
        case "black":
            return "#303031BB";
        case "gold":
            return "#e8aa24";
        default:
            return "#00000000";
    }
    }

    return (
        <div
            className={`postcardContainer ${background}`}
            style={{
                rotate: `${rotateDeg}deg`,
                marginLeft: `${left}px`,
                marginRight: `${right}px`,
                marginTop: `${top}px`,
                marginBottom: `${bottom}px`,
            }}
        >
            {background !== "none" && (
                <div className="stampContainer">
                    <div className="postal-stamp-received">
                        <PostalStampReceived color={setColor(receivedStampColor)} />
                    </div>
                    <div className="postal-stamp-airmail">
                        <PostalStampAirmail color={setColor(airmailStampColor)} />
                    </div>
                    <div className="postal-stamp-china">
                        <PostalStampChina color={setColor(chinaStampColor)} />
                    </div>
                </div>
            )}
            <div className="contentContainer">
                {hasImage && (
                    <div className="imageContainer">
                        <img
                            src={ShortStickyTape}
                            alt=""
                            className="shortStickyTape_ul"
                        />
                        <Photo />
                        <img
                            src={ShortStickyTape}
                            alt=""
                            className="shortStickyTape_br"
                        />
                    </div>
                )}
                <div
                    className={
                        hasImage
                            ? "contextContainer hasImage"
                            : "contextContainer"
                    }
                >
                    <span className={`contextHeader ${background === "none"? "big" : ""}`}>{title}</span>
                    <span className={`contextInfo ${background === "none"? "big" : ""}`}>{context}</span>
                    {commenter.length > 0 && (
                        <div className={`commenter ${background === "none"? "big" : ""}`}>-- {commenter}</div>
                    )}
                    {hasButton && (
                        <button
                            onClick={() => navigate("/")}
                            className="floatingBotton"
                        >
                            <span>{buttonContext}</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Postcard;
