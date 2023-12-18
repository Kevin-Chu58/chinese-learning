import React from "react";
import iconicSemicircleTop from "./../../assets/iconic-semicircle-top.svg";
import iconicSemicircleBottom from "./../../assets/iconic-semicircle-bottom.svg";
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
                    WOERLD HETU CHINESE EDUCATION INSTITUTE
                    {/* 扎根本土筑基民族魂 <br />
                        面向世界融贯意识心 */}
                </div>
            </div>

            <img src={iconicSemicircleBottom} alt="" />
        </div>
    );
};

export default Logo;
