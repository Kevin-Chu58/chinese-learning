import { PropsWithChildren } from "react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./style.css";
import Photo from "../Photo";
import ShortStickyTape from "./../../assets/short-sticky-tape.svg";
import PostalStampChina from "./../../assets/postal-stamp-china.tsx";
import PostalStampReceived from "./../../assets/postal-stamp-received.tsx";
import PostalStampAirmail from "./../../assets/postal-stamp-airmail.tsx";

type Props = {
    rotateDeg?: number;
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

    return (
        <div
            className="postcardContainer"
            style={{
                rotate: `${rotateDeg}deg`,
                marginLeft: `${left}px`,
                marginRight: `${right}px`,
                marginTop: `${top}px`,
                marginBottom: `${bottom}px`,
            }}
        >
            <div className="stampContainer">
                <div className="postal-stamp-received">
                    <PostalStampReceived color={receivedStampColor} />
                </div>
                <div className="postal-stamp-airmail">
                <PostalStampAirmail color={airmailStampColor} />
                </div>
                <div className="postal-stamp-china">
                <PostalStampChina color={chinaStampColor} />
                </div>
            </div>
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
                    <span className="contextHeader">{title}</span>
                    <span className="contextInfo">{context}</span>
                    {commenter.length > 0 && (
                        <div className="commenter">-- {commenter}</div>
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
