import { Button, Grid } from "@mui/material";
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

    return (
        <div className="box no-margin fd-row">
            {textLeft && <div
                className="left-align-box no-margin padding_20"
                style={{ marginLeft: width >= 900 ? "100px" : "50px" }}
            >
                <Button
                    onClick={() => navigate(navLeft)}
                    variant="contained"
                    startIcon={<KeyboardDoubleArrowLeftIcon />}
                    sx={{
                        fontSize: "20px",
                        backgroundColor: "var(--brown)",
                        ":hover": { backgroundColor: "var(--persian-red)" },
                    }}
                >
                    {textLeft}
                </Button>
            </div>}
            {textRight && <div
                className="right-align-box no-margin margin-left_max padding_20"
                style={{ marginRight: width >= 900 ? "100px" : "50px" }}
            >
                <Button
                    onClick={() => navigate(navRight)}
                    variant="contained"
                    endIcon={<KeyboardDoubleArrowRightIcon />}
                    sx={{
                        fontSize: "20px",
                        backgroundColor: "var(--brown)",
                        ":hover": { backgroundColor: "var(--persian-red)" },
                    }}
                >
                    {textRight}
                </Button>
            </div>}
        </div>
    );
};

export default SubNavBar;