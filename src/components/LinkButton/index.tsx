import React from "react";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

type Props = {
    link: string;
    bgColor?: string;
    color?: string;
    hoverBgColor?: string;
    hoverColor?: string;
};

const LinkButton = ({
    link,
    bgColor = "var(--brown)",
    color = "white",
    hoverBgColor = "var(--persian-red)",
    hoverColor = "white",
    children,
}: PropsWithChildren<Props>) => {
    return (
        <Link target="_blank" to={link}>
            <Button
                sx={{
                    backgroundColor: bgColor,
                    color: color,
                    ":hover": {
                        backgroundColor: hoverBgColor,
                        color: hoverColor,
                    },
                }}
            >
                {children}
            </Button>
        </Link>
    );
};

export default LinkButton;
