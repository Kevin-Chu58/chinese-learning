import React from "react";
import { PropsWithChildren } from "react";

type Props = {
    image: string;
};

const ImageHolder = ({
    image,
    children
}: PropsWithChildren<Props>) => {

    return (
        <div style={{display: "flex", flexDirection: "column", margin: "10px", textAlign: "center"}}>
            <img src={image} alt="" style={{borderRadius: "10px"}} />
            {children}
        </div>
    )
}

export default ImageHolder;