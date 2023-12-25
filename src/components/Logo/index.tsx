import React from "react";
import iconicSemicircleTop from "./../../assets/images/iconic-semicircle-top.svg";
import iconicSemicircleBottom from "./../../assets/images/iconic-semicircle-bottom.svg";
import "./style.css";

const Logo = () => {
    return (
        <div className="iconicCircleContainer">
            <img src={iconicSemicircleTop} alt="" />

            <div className="chiTextContainer">
                <div className="chiText">
                    <div>世界和图中文教育学会</div>
                </div>
            </div>

            <div className="engTextContainer">
                <div className="engText">
                    WORLD HETU CHINESE EDUCATION INSTITUTE
                </div>
            </div>

            <img src={iconicSemicircleBottom} alt="" />
        </div>
    );
};

export default Logo;
