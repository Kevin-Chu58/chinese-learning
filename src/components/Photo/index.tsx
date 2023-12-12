import React from "react";
import style from "./photo.module.css";
import DefaultImage from "./../../assets/default-image.jpg";

const Photo = () => {
    return (
        <div className={style.photoContainer} style={{rotate: "-5deg"}}>
            <img src={DefaultImage} alt="" className={style.photo} />
        </div>
    );
};

export default Photo;
