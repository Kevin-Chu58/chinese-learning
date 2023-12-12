import { PropsWithChildren } from "react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import style from "./postcard.module.css";
import Photo from "../Photo";
import ShortStickyTape from "./../../assets/short-sticky-tape.svg";
import PostalStampChina from "./../../assets/postal-stamp-china.svg";

type Props = {
    rotateDeg?: string;
    title?: string;
    context?: string;
    buttonContext?: string;
};

const Postcard = ({
    rotateDeg = "0deg",
    title = "加个标题",
    context = "在这里多加几句话几句话几句话几句话几句话几句话几句话",
    buttonContext = "让我康康",
}: PropsWithChildren<Props>) => {
    const navigate = useNavigate();

    return (
        <div className={style.postcardContainer} style={{ rotate: rotateDeg }}>
            <div className={style.stampContainer}>
                <img
                    src={PostalStampChina}
                    alt=""
                    className={style.postalStamp}
                />
            </div>
            <div className={style.contentContainer}>
                <div className={style.imageContainer}>
                    <img
                        src={ShortStickyTape}
                        alt=""
                        className={style.shortStickyTape_ul}
                    />
                    <Photo />
                    <img
                        src={ShortStickyTape}
                        alt=""
                        className={style.shortStickyTape_br}
                    />
                </div>
                <div className={style.contextContainer}>
                    <span className={style.contextHeader}>{title}</span>
                    <span className={style.contextInfo}>{context}</span>
                    <button
                        onClick={() => navigate("/")}
                        className={style.floatingBotton}
                    >
                        <span>{buttonContext}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Postcard;
