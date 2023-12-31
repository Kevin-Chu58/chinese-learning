import { Button } from "@mui/material";
import { PropsWithChildren } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

type Props = {
    width: number;
    navLeft?: string;
    navRight?: string;
    textLeft?: string | undefined;
    textRight?: string | undefined;
};

const SubNavBar = ({
    width,
    navLeft = "/",
    navRight = "/",
    textLeft = undefined,
    textRight = undefined,
}: PropsWithChildren<Props>) => {
    const navigate = useNavigate();

    const setScrollPosition = (e: React.MouseEvent) => {
        e.preventDefault();
        document.getElementById("main")?.scrollTo(0, 0);
    };

    return (
        <div className="box no-margin fd-row vw100" style={{ margin: "50px 0" }}>
            {textLeft && (
                <div
                    className="left-align-box no-margin padding_20"
                    style={{ marginLeft: "5vw" }}
                >
                    <Button
                        onClick={(e) => {
                            navigate(navLeft);
                            setScrollPosition(e);
                        }}
                        variant="contained"
                        startIcon={<KeyboardDoubleArrowLeftIcon />}
                        sx={{
                            fontSize: width >= 700? "20px" : "14px",
                            backgroundColor: "var(--brown)",
                            ":hover": { backgroundColor: "var(--persian-red)" },
                        }}
                    >
                        {textLeft}
                    </Button>
                </div>
            )}
            {textRight && (
                <div
                    className="right-align-box no-margin margin-left_max padding_20"
                    style={{ marginRight: "5vw" }}
                >
                    <Button
                        onClick={(e) => {
                            navigate(navRight);
                            setScrollPosition(e);
                        }}
                        variant="contained"
                        endIcon={<KeyboardDoubleArrowRightIcon />}
                        sx={{
                            fontSize: width >= 700? "20px" : "14px",
                            backgroundColor: "var(--brown)",
                            ":hover": { backgroundColor: "var(--persian-red)" },
                        }}
                    >
                        {textRight}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default SubNavBar;
