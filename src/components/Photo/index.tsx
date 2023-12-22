import React from "react";
import "./style.css";
import DefaultImage from "./../../assets/images/default-image.jpg";

const Photo = () => {
    return (
        <div className="photoContainer" style={{rotate: "-5deg"}}>
            <img src={DefaultImage} alt="" className="photo" />
        </div>
    );
};

export default Photo;
